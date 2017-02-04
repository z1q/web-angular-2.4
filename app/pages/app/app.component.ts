import {Component} from '@angular/core';

import 'assets/js/jquery-3.1.1.js';
import 'assets/js/bootstrap.js';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: './app.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
  appName = '奋斗记';
}
