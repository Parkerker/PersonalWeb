import { Component, Input, OnDestroy } from '@angular/core';

import { Test2MissionService } from './test2-mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-astronaut',
  template: `
    <p>
      {{astronaut}}: <strong>{{mission}}</strong>
      <button
        type="button"
        (click)="confirm()"
        [disabled]="!announced || confirmed">
        確認任務
      </button>
    </p>
  `
})
export class Test2AstronautComponent implements OnDestroy {
  @Input() astronaut = '';
  mission = '<尚未派發任務>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: Test2MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
