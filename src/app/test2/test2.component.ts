import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import {Test2VersionParent} from '../test2/version-parent.component';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  
  title="練習2";
  constructor(private router:Router) { } // <-- 注入router:Router

}
