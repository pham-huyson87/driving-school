import { Injectable } from '@angular/core'

@Injectable()
export class StudentService {

    getStudentFile() {
        return STUDENT;
    }
}

const STUDENT = {
    firstname: 'Huy Son',
    lastname: 'Pham',
    contract_no: '11122233'
}