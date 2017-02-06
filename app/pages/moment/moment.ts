import { Component,Input } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'page-moment',
  templateUrl: 'moment.html'
})
export class MomentPage {
  @Input()
  moment;
}
