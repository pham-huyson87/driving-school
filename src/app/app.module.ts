import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhaseListComponent } from './phases/phase-list.component';
import { Phase } from './phases/phase.component';
import { ModuleList } from './modules/module-list.component';
import { Module } from './modules/module.component';

@NgModule({
  imports: [
        BrowserModule
    ],
  declarations: [
    AppComponent,
    PhaseListComponent,
    Phase,
    ModuleList,
    Module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
