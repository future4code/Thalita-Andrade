import { Student } from './student';
import { Teacher } from './teacher';
import moment = require("moment")

export abstract class Mission {
    startDate: moment.Moment;
    endDate: moment.Moment;
    teacherList: Teacher[];
    studentList: Student[];

    constructor( startDate: moment.Moment, endDate: moment.Moment, teacherList: Teacher[]) {
        this.startDate = startDate,
        this.endDate = endDate,
        this.teacherList = teacherList,
        this.studentList;
    }
}
