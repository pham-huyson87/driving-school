import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'phase',
    template: `
        <div>{{phase.name}} - {{phase.description}}</div>
        <div>
            <module-list [modules]="phase.modules"></module-list>
        </div>
    `
})
export class Phase {
    @Input() phase:any
    @Output() phaseClick = new EventEmitter()

    someProperty:any = "some property"

    handlePhaseClick() {
        this.phaseClick.emit(this.phase.name);
    }

    doOperation() {
        console.log('foo');
    }
}