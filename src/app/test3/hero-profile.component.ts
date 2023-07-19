import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>近期表現優良英雄</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>就決定雇用這隻英雄了！！</strong>
    </div>
  `,
  styleUrls: ['./test3.component.css']
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}


