import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'module',
    template: `
    <div>NOT USED for now</div>
    {{phaseId}} 
    {{moduleId}}
    `
})
export class Module implements OnInit {

    phaseId:any
    moduleId:any
    isDirty:boolean = true;

    @Input() module:any

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.phaseId = this.route.snapshot.params['phase_id'];
        this.moduleId = this.route.snapshot.params['module_id'];
    }
}