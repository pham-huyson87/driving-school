import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'phase',
    template: `
    <div class="well">
        <h2>{{phase.name}}</h2>
        <div>{{phase.description}}</div>
        <button class="btn btn-primary" (click)="handlePhaseClick()">Click me!</button>
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