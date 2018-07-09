import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import {AppRoutingModule,routingComponent} from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSpinner,MatCardModule,MatToolbarModule,MatTreeModule,MatInputModule,MatExpansionModule,MatMenuModule,MatButtonToggleModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SpeechService } from 'ngx-speech'; 
import { ContainerAppComponent } from './container-app/container-app.component';
import {SpeechModule} from '../lib';
import {CalcComponent} from './calc/calc.component';
import {MedicineComponent  } from "./medicine/medicine.component";
import { DosagesComponent } from './dosages/dosages.component';
import { QuantityComponent } from './quantity/quantity.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,MyNavComponent,routingComponent,
    MatSpinner,ContainerAppComponent,CalcComponent,MedicineComponent, 
    DosagesComponent, QuantityComponent
  ],
  imports: [
    SpeechModule,MatCardModule,AppRoutingModule,MatMenuModule,
    MatExpansionModule,MatInputModule,MatTreeModule,BrowserAnimationsModule,
    BrowserModule,FormsModule,HttpModule,MatButtonToggleModule,
     LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule,
      MatIconModule, MatListModule,HttpClientModule
  ],
  providers: [
    { provide: 'SPEECH_LANG', useValue: 'en-US' },
],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
    

  
  
}
