import { Component, Input } from '@angular/core'

@Component({
    selector: 'module-list',
    templateUrl:'./module-list.component.html'
})
export class ModuleList {
    @Input() modules:any
}