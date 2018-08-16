import { Component } from '@angular/core'

@Component({
    selector: 'phase-list',
    templateUrl: './phase-list.component.html'
})
export class PhaseListComponent {
    phase = {
        id: 1,
        number: '1',
        name: 'Phase 1',
        description: 'Préalable au permis d\'apprenti'
    };
}