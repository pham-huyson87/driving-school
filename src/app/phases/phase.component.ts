import { Component, Input } from '@angular/core'

@Component({
    selector: 'phase',
    template: `
    <div class="well">
        <h2>{{phase.name}}</h2>
        <div>{{phase.description}}</div>
    </div>
    `
})
export class Phase {
    @Input() phase:any
}