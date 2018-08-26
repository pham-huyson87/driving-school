import { Component, Input } from '@angular/core'
import { ToastrService } from '../common/toastr.service';

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

    constructor(private toatrService: ToastrService) {

    }

    handleClick(data) {
        this.toatrService.success(data)
    }

    getClasses() {
        
        let addGreen = true;
        let addBold = true
        
        return {
            green: addGreen,
            bold: addBold
        }
    }

    getStyles():any {

        let condition = true;

        if (condition) {
            return {
                color: '#003300',
                'font-weight': 'bold'
            };
        }

        return {};
    }
}