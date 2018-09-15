import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PhaseListComponent } from "./phases/phase-list.component";
import { Phase } from './phases/phase.component';
import { ModuleList } from './modules/module-list.component';
import { Module } from './modules/module.component';
import { StudentFileShort } from './student/student-file-short.component';

import { PhaseService } from './phases/shared/phase.service';
import { StudentService } from './student/shared/student.service';
import { ToastrService } from './common/toastr.service';
import { ModuleRouteActivator } from './modules/module-route-activator.service';

import { appRoutes } from './routes'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    PhaseListComponent,
    Phase,
    ModuleList,
    Module,
    StudentFileShort
  ],
  providers: [
    PhaseService,
    StudentService,
    ToastrService,
    ModuleRouteActivator,
    {
      provide: 'canDeactivatePhaseModule',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: Module) {
  
  if (component.isDirty)
    return window.confirm("Are you sure ?");
  
  return true;
}
