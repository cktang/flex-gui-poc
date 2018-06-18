import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { Component1 } from './components/Component1';
import { Component2 } from './components/Component2';
import { GridComponent } from './components/GridComponent';

// import { RoundProgressModule } from 'angular-svg-round-progressbar'; 
import { AgGridModule } from 'ag-grid-angular';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { SpeedTestComponent } from './components/SpeedTestComponent';
import { M } from './service/M';
import { BaseComponent } from './components/BaseComponent';
import { ComponentSelector } from './components/componentSelector';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ComponentSelector,

    Component1,
    Component2,
    GridComponent,
    SpeedTestComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule, 
    GridsterModule,
    // RoundProgressModule,
    AgGridModule.withComponents([]),
    DynamicModule.withComponents([
      Component1,
      Component2,
      GridComponent,
      SpeedTestComponent
    ])
  ], 
  providers: [
    M
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }