import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Test2CountdownTimerComponent } from './test2-countdown-timer.component';


//// Local variable, #timer, version
@Component({
  selector: 'app-countdown-parent-lv',
  template: `
    <!-- <h3>Countdown to Liftoff (via local variable)</h3> -->
    <h3>倒數計時器</h3>
    <button type="button" (click)="timer.start()">開始</button>
    <button type="button" (click)="timer.stop()">停止</button>
    <div class="seconds">{{timer.seconds}}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrls: ['../../assets/demo.css']
})
export class Test2CountdownLocalVarParentComponent { }

//// View Child version
@Component({
  selector: 'app-countdown-parent-vc',
  template: `
    <h3>Countdown to Liftoff (via ViewChild)</h3>
    <button type="button" (click)="start()">Start</button>
    <button type="button" (click)="stop()">Stop</button>
    <div class="seconds">{{ seconds() }}</div>
    <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['../../assets/demo.css']
})
export class CountdownViewChildParentComponent implements AfterViewInit {

  @ViewChild(Test2CountdownTimerComponent)
  private timerComponent!: Test2CountdownTimerComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
