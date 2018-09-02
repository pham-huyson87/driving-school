import { Component, OnInit } from '@angular/core'
import { PhaseService } from './shared/phase.service';

@Component({
    templateUrl: './phase-list.component.html',
    styles: [`
        .container { margin-top: 10px; }
    `]
})
export class PhaseListComponent implements OnInit {

    phases:any

    constructor(private phaseService: PhaseService) {

    }

    ngOnInit(): void {
        this.phases = this.phaseService.getPhases();
    }
}