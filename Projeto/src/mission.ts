import { Student } from './student';
import { Teacher } from './teacher';
import moment = require("moment")

export abstract class Mission {
    startDate: moment.Moment;
    endDate: moment.Moment;
    teacherList: Teacher;
    studentList: Student;

    constructor( startDate: moment.Moment, endDate: moment.Moment, teacherList: Teacher, studentList: Student) {
        this.startDate = startDate,
        this.endDate = endDate,
        this.teacherList = teacherList,
        this.studentList = studentList
    }
}

const mission: Mission = new Mission(moment("2020-01-01"), moment("2020-06-30"), Teacher, Student)
console.log(mission)