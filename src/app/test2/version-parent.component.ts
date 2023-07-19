import { Component } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  template: `
    <h2>目前通關關卡</h2>
    <button type="button" (click)="newMajor()">下一關主要關卡</button>
    <button type="button" (click)="newMinor()">下一關次要關卡</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `
})
export class VersionParentComponent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
