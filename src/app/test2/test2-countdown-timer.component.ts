import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>'
})
export class Test2CountdownTimerComponent implements OnDestroy {
  message = '';
  seconds = 11;

  ngOnDestroy() { this.clearTimer?.(); }

  start() { this.countDown(); }
  stop()  {
    this.clearTimer?.();
    this.message = `暫停在${this.seconds} 秒`;
  }

  private clearTimer: VoidFunction | undefined;

  private countDown() {
    this.clearTimer?.();
    const interval = setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = '時間到';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `目前為${this.seconds} 秒`;
      }
    }, 1000);
    this.clearTimer = () => clearInterval(interval);
  }
}
