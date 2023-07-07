import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parkerker 學習中';

  // constructor(private router:Router) { } // <-- 注入router:Router
  // toSecondComponent() {
  //   this.router.navigate(['dashboard']); // <-- 導向SecondComponent
  // }
}
