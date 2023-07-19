import { Component } from '@angular/core';

import { Test2MissionService } from './test2-mission.service';

@Component({
  selector: 'app-mission-control',
  template: `
    <h2>任務派發</h2>
    <button type="button" (click)="announce()">更換任務</button>

    <app-astronaut
      *ngFor="let astronaut of astronauts"
      [astronaut]="astronaut">
    </app-astronaut>

    <h3>歷史紀錄</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
  providers: [Test2MissionService]
})
export class Test2MissionControlComponent {
  astronauts = ['阿姆斯壯', '亞歷山大', '麥可'];
  history: string[] = [];
  missions = ['前往月球!',
              '前往火星!',
              '前往金星!'];
  nextMission = 0;

  constructor(private missionService: Test2MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} 確認任務`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`任務 "${mission}" 已記錄`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}
