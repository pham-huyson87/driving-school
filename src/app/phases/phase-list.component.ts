import { Component } from '@angular/core'

@Component({
    selector: 'phase-list',
    template: `
    <div>
        <h1>Phases</h1>
        <hr/>

        <phase  [phase]="phase1"
                (phaseClick)=handlePhaseClicked($event)></phase>
        
        <phase  #phase2
                [phase]="phase2"></phase>

        <button class="btn btn-info" (click)="phase2.doOperation()">
            Call Phase2 doOperation()
        </button>

    </div>
    `
})
export class PhaseListComponent {
    phase1 = {
        id: 1,
        number: '1',
        name: 'Phase 1',
        description: 'Préalable au permis d\'apprenti'
    };

    phase2 = {
        id: 2,
        number: '2',
        name: 'Phase 2',
        description: 'Conduite dirigée'
    };

    handlePhaseClicked(data) {
        console.log('received: ', data);
    }
}