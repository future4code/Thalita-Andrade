import { Student } from './student';
import { Teacher } from './teacher';
import moment = require("moment")

export abstract class Mission {
    protected startDate: moment.Moment;
    protected endDate: moment.Moment;
    protected teacherList: Teacher;
    protected studentList: Student;

    constructor( startDate: moment.Moment, endDate: moment.Moment, teacherList: Teacher, studentList: Student) {
        this.startDate = startDate,
        this.endDate = endDate,
        this.teacherList = teacherList,
        this.studentList = studentList
    }
}