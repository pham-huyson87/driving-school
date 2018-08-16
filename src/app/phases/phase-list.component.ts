import { Component } from '@angular/core'

@Component({
    selector: 'phase-list',
    template: `
    <div>
        <h1>Phases</h1>
        <hr/>
        <phase  [phase]="phase1"
                (phaseClick)=handlePhaseClicked($event)></phase>
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

    handlePhaseClicked(data) {
        console.log('received: ', data);
    }
}