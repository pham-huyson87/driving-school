import { Component } from '@angular/core'

@Component({
    selector: 'phase-list',
    template: `
        <div>
            <h1>Phases</h1>
            <hr/>
            <h2>{{phase.name}}</h2>
            <div>{{phase.description}}</div>
        </div>
    `
})
export class PhaseListComponent {
    phase = {
        id: 1,
        number: '1',
        name: 'Phase 1',
        description: 'Préalable au permis d\'apprenti'
    };
}