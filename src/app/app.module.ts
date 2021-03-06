import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router' 

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {AboutComponent } from './components/about/about.component';
//services
import { DataService } from './services/data.service';

const appRoutes : Routes = [
  {
   path:'', 
   component:UserComponent 
  },{
    path:'about',
    component:AboutComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
