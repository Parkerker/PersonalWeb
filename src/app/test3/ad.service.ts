import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        HeroProfileComponent,
        { name: '鋼鐵人', bio: '研發出新科技' }
      ),
      new AdItem(
        HeroProfileComponent,
        { name: '奇異博士', bio: '聰明且有智慧' }
      ),
      new AdItem(
        HeroJobAdComponent,
        { headline: '想加入英雄行列保護世界嗎!', body: '馬上來報名!' }
      ),
      new AdItem(
        HeroJobAdComponent,
        { headline: '目前要找的就是你', body: '~立即申請~' }
      )
    ];
  }
}
