import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {

  constructor(private router:Router) { } // <-- 注入router:Router

  toSecondComponent() {
    this.router.navigate(['dashboard']); // <-- 導向SecondComponent
  }

}
