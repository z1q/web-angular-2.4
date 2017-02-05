import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePage} from '../pages/home/home';
import {ExperiencePage} from '../pages/experience/experience';
import {UserPage} from '../pages/user/user';
import {NotFoundPage} from '../pages/not-found/not-found';

let routes:Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'experience',
    component: ExperiencePage
  },
  {
    path: 'u',
    component: UserPage
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:NotFoundPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
