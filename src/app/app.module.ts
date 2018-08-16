import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhaseListComponent } from './phases/phase-list.component';
import { Phase } from './phases/phase.component';

@NgModule({
  imports: [
        BrowserModule
    ],
  declarations: [
    AppComponent,
    PhaseListComponent,
    Phase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
