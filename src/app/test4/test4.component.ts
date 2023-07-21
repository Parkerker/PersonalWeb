import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component {
  color = '';

  title="練習4";

  constructor(private router:Router) { } // <-- 注入router:Router
}
