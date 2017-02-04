import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppRoutingModule} from './router/app-routing.module';

import {AppComponent} from './pages/app/app.component';

import {HomePage} from './pages/home/home';
import {ExperiencePage} from './pages/experience/experience';
import {UserPage} from './pages/user/user';
import {NotFoundPage} from './pages/not-found/not-found';


//@()是ts的装饰器
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePage,
    ExperiencePage,
    UserPage,
    NotFoundPage
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
