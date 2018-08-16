import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhaseListComponent } from './phases/phase-list.component';

@NgModule({
  imports: [
        BrowserModule
    ],
  declarations: [
    AppComponent,
    PhaseListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
