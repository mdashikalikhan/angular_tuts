import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, merge, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionTimeOutService {

  private timeOutInMS:number=2*60*1000;
  private userActivityEvents$?:Subscription;
  constructor(private router:Router, private ngZone:NgZone) { }

  sartWatching():void{
    this.ngZone.runOutsideAngular(()=>{
      const activityEvents$=merge(
        fromEvent(window, 'mousemove'),
        fromEvent(window, 'keydown'),
        fromEvent(window, 'click'),
        fromEvent(window, 'scroll')
      );
    });
  }
}
