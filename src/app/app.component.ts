import { Component, OnInit } from '@angular/core';
import { StudentService } from './student/shared/student.service';

@Component({
  selector: 'app-root',
  template:  `
    <student-file-short [file]="data.student_file"></student-file-short>
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