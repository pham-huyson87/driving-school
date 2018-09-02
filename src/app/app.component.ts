import { Component, OnInit } from '@angular/core';
import { StudentService } from './student/shared/student.service';

@Component({
  selector: 'app-root',
  template:  `
    <student-file-short [file]="data.student_file"></student-file-short>
    <a [routerLink]="['phase/1/module/1']">Phase 1 Module 1</a>
    <a [routerLink]="['phase/1/module/2']">Phase 1 Module 2</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {

  data = {
    phases: [],
    student_file: {}
  }

  constructor(private studentService: StudentService) {

  }

  ngOnInit(): void {
      this.data.student_file = this.studentService.getStudentFile();
  }
}