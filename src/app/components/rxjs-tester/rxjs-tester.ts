import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { of, map } from 'rxjs';

@Component({
  selector: 'app-rxjs-tester',
  imports: [],
  templateUrl: './rxjs-tester.html',
  styleUrl: './rxjs-tester.css'
})
export class RxjsTester {

  observable!: Observable<number>;
  observer!: Observer<number>;
  subscription!: Subscription;

  values: number[] = [];
  status: string = 'Idle';
  counter: number = 0;

  createObservable() {
    this.observable = new Observable<number>(
      obs => {
        this.observer = obs;
        this.status = "Observer created";
      }
    );
    this.subscription = this.observable.subscribe(
      {
        next: val => {
          this.values.push(val);
          this.status = `Received: ${val}`;
        },
        error: err => {
          this.status = `Error: ${err}`;
        },
        complete: () => this.status = "Complete"
      }
    );
  }

  emitValue() {
    if (this.observer) {
      this.counter++;
      this.observer.next(this.counter);
    }
  }

  completeObservable() {
    if (this.observer) {
      this.observer.complete();
    }
  }

  throwError() {
    if (this.observer) {
      this.observer.error("Test Error");
      this.status = "Throw Error";
    }
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.status = "Unsubscribed.";
    }
  }

  reset() {
    this.values = [];
    this.counter = 0;
    this.status = "Idle"
  }

  example() {
    of(1, 2, 3).pipe(map(x => x * 10)).subscribe(
      v => {
        this.values.push(v);
        console.log(v);
      }
    );


  }
}
