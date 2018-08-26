import { Component, OnInit } from '@angular/core';
import { PhaseService } from './phases/shared/phase.service';
import { StudentService } from './student/shared/student.service';

@Component({
  selector: 'app-root',
  template:  `
    <student-file-short [file]="data.student_file"></student-file-short>
    <phase-list [phases]="data.phases"></phase-list>
    `
})
export class AppComponent implements OnInit {

  data = {
    phases: [],
    student_file: {}
  }

  constructor(private phaseService: PhaseService, 
              private studentService: StudentService) {

  }

  ngOnInit(): void {
      this.data.phases = this.phaseService.getPhases();
      this.data.student_file = this.studentService.getStudentFile();
  }
}