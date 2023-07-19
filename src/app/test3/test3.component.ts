import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';
@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})

export class Test3Component{
  title="練習3"
  ads: AdItem[] = [];
  //constructor(private router:Router) { } // <-- 注入router:Router
  constructor(private adService: AdService) {}
  ngOnInit() {
    this.ads = this.adService.getAds();
  }
  
}

