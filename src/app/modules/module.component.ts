import { Component, Input } from '@angular/core'

@Component({
    selector: 'module',
    template: `
    <div class="col-md-2">
        <span>{{module.name}}</span>
    </div>
    <div class="col-md-2">
        <input class="editable-date" name="editable-date" type="text" value="{{module.date}}">
    </div>
    <div class="col-md-2">
        <input class="editable-time" name="editable-time-start" type="text" value="{{module.times_start}}">
        <input class="editable-time" name="editable-time-end" type="text" value="{{module.times_end}}">
    </div>
    <div class="col-md-2">
        <input name="student-signature" type="text" value="{{module.student_signature}}">
    </div>
    <div class="col-md-2">
        <input name="provider-signature" type="text" value="{{module.provider_signature}}">
    </div>    
    `
})
export class Module {
    @Input() module:any
}