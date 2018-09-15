
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'

@Injectable()
export class ModuleRouteActivator implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        
        let phaseId = route.params['phase_id'];
        let moduleId = route.params['module_id'];

        let isOkay = phaseId == 13 && moduleId == 37;
        
        if (isOkay) {
            this.router.navigate(['phases']);
        } else {
            return isOkay;
        }
    }
}