import { Component } from '@angular/core'

@Component({
    selector: 'phase-list',
    template: `
    <div>
        <h1>Phases</h1>
        <hr/>

        <div *ngFor="let phase of phases">
            <phase  [phase]="phase"></phase>
        </div>

    </div>
    `
})
export class PhaseListComponent {

    phases = [
        {
            id: 1,
            number: '1',
            name: 'Phase 1',
            description: 'Préalable au permis d\'apprenti'
        },
        {
            id: 2,
            number: '2',
            name: 'Phase 2',
            description: 'Conduite dirigée'
        },
        {
            id: 3,
            number: '3',
            name: 'Phase 3',
            description: 'Conduite semi-dirigée'
        },
        {
            id: 4,
            number: '4',
            name: 'Phase 4',
            description: 'Conduite semi-dirigée à autonome'
        },
    ]

    handlePhaseClicked(data) {
        console.log('received: ', data);
    }
}