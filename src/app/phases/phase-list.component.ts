import { Component, Input } from '@angular/core'

@Component({
    selector: 'phase-list',
    templateUrl: './phase-list.component.html',
    styles: [`
        .container { margin-top: 10px; }
    `]
})
export class PhaseListComponent {
    @Input() phases:any
}