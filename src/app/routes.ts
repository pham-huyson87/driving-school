import { Routes } from '@angular/router'

import { PhaseListComponent } from "./phases/phase-list.component";
import { Module } from "./modules/module.component";

export const appRoutes:Routes = [
    { path: 'phases', component: PhaseListComponent },
    { path: 'phase/:phase_id/module/:module_id', component: Module },
    { path: '', redirectTo: '/phases', pathMatch: 'full' }
]