
import { Component, Input } from '@angular/core'


@Component({
    selector: 'student-file-short',
    template: `
        <div class="container">
            <div class="row">Contrat: {{file.contract_no}}</div>
            <div class="row">Nom: {{file.firstname}} {{file.lastname}}</div>
        </div>
    `,
    styles: [`
        .container { margin-top: 10px; }
    `]
})
export class StudentFileShort {
    @Input() file:any
}