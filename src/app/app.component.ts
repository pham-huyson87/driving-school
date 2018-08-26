import { Component, OnInit } from '@angular/core';
import { PhaseService } from './phases/shared/phase.service';

@Component({
  selector: 'app-root',
  template:  `
    <student-file-short [file]="data.student_file"></student-file-short>
    <phase-list [phases]="data.phases"></phase-list>
    `
})
export class AppComponent implements OnInit {

  data = {
    phases: {},
    student_file: {
      firstname: 'Huy Son',
      lastname: 'Pham',
      contract_no: '11122233'
    }
  }

  constructor(private phaseService: PhaseService) {

  }

  ngOnInit(): void {
      this.data.phases = this.phaseService.getPhases();
  }
}