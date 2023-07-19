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
    Test2AstronautComponent 
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
