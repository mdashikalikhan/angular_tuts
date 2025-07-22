import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTester } from './rxjs-tester';

describe('RxjsTester', () => {
  let component: RxjsTester;
  let fixture: ComponentFixture<RxjsTester>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsTester]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTester);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
