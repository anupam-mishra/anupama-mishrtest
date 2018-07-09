import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { PatientMainComponent } from './patient-main/patient-main.component';
import {LoginComponent} from './login/login.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import {ContainerAppComponent} from './container-app/container-app.component';



const routes: Routes =[      
    /*{path: '',component:LoginComponent},*/
    {path: '',component:LoginComponent},       
    {path: 'my-nav',component:MyNavComponent},
    {path: 'container',component:ContainerAppComponent}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
export const routingComponent=[PatientMainComponent,LoginComponent,ContainerAppComponent,MyNavComponent]