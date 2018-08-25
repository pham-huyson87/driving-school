import { Component, Input } from '@angular/core'

@Component({
    selector: 'module-list',
    templateUrl:'./module-list.component.html',
    styles: [`
        .green { 
            background-color: red !important; 
        } 

        .bold {
            font-weight: bold;
        }
    `]
})
export class ModuleList {
    @Input() modules:any
}