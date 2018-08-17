import { Component, Input } from '@angular/core'

@Component({
    selector: 'module-list',
    template: `
        <div class="row">
            <div class="col-md-2">Module</div>
            <div class="col-md-2">Date</div>
            <div class="col-md-2">Heures</div>
            <div class="col-md-2">Signature de l'élève</div>
            <div class="col-md-2">Signature du fournisseur</div>
        </div>
        <module class="row" *ngFor="let module of modules" [module]="module"></module>
    `
})
export class ModuleList {
    @Input() modules:any
}