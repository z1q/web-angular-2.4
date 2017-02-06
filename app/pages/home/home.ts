import {Component, OnInit} from '@angular/core';

import {MomentService} from '../../service/moment';

@Component({
  moduleId: module.id,
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MomentService]
})
export class HomePage {
  moments:any;

  constructor(private momentService:MomentService) {
  }

  getMoments():void {
    this.momentService.getMoments().then(moments=>{console.log(moments);this.moments = moments});
  }

  ngOnInit():void {
    this.getMoments();
  }
}
