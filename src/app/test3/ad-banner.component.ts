import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h2>廣告</h2>
      <ng-template adHost></ng-template>
    </div>
  `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = []; //要輪播顯示的廣告

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  //宣告剛剛建立的Directive，並藉由<ng-template ad-host>取得傳入的adHost

  private clearTimer: VoidFunction | undefined;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    this.clearTimer?.();
  }
//最重要動態載入廣告的程式碼都在這個function裡
  loadComponent() {
    //決定要顯示那則廣告
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

     //透過剛剛從AdDirective傳來的資訊取得要載入ad的template
    const viewContainerRef = this.adHost.viewContainerRef;
    //將template內容清掉
    viewContainerRef.clear();

    //動態建立template並顯示在畫面上
    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

   //通過這個方法，每三秒會動態載入不同的廣告元件
  getAds() {
    const interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
    this.clearTimer = () => clearInterval(interval);
  }
}
