import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'phase',
    template: `
        <div>NOT USED for now</div>
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