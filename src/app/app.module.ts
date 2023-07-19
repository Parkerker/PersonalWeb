import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Test1Component } from './test1/test1.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { Test2Component } from './test2/test2.component';
import { VersionParentComponent } from './test2/version-parent.component';
import { VersionChildComponent } from './test2/version-child.component';
import { Test2CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './test2/test2-countdown-parent.component';
import { Test2CountdownTimerComponent } from './test2/test2-countdown-timer.component';
//import { Test2VersionParentComponent } from './test2/test2-version-parent.component';
//import { Test2VersionChildComponent } from './test2/test2-version-child.component';
import { Test2MissionControlComponent } from './test2/test2-missioncontrol.component';
import { Test2AstronautComponent } from './test2/test2-astronaut.component';
import { Test3Component } from './test3/test3.component';

import { HeroJobAdComponent } from './test3/hero-job-ad.component';
import { AdBannerComponent } from './test3/ad-banner.component';
import { HeroProfileComponent } from './test3/hero-profile.component';
import { AdDirective } from './test3/ad.directive';
import { AdService } from './test3/ad.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [],
  providers: [ AdService ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    MainpageComponent,
    Test1Component,
    HeroSearchComponent,
    Test2Component,
    VersionParentComponent,
    VersionChildComponent,
    Test2CountdownLocalVarParentComponent,
    Test2CountdownTimerComponent,
    CountdownViewChildParentComponent,
    Test2MissionControlComponent,
    Test2AstronautComponent,
    Test3Component,

    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
