import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppComponent } from './app.component';

import { AppService } from './app.service';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    MatButtonModule, MatCheckboxModule
   // MaterialModule.forRoot(),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
