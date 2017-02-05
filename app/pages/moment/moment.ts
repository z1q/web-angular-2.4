import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'page-moment',
  templateUrl: 'moment.html'
})
export class MomentPage {
  userImg:String="assets/img/anna.jpg";
  userName:String="anna";
  userTarget:String="去泰国旅游";
  momentState:String="正在进行";
  targetNow:String="自媒体运营";
  content:String="在你放弃任何东西之前，回想一下你为什么当初想把它做起来";
}
