import moment = require("moment")

export abstract class Mission {
    startDate: moment.Moment;
    endDate: moment.Moment;
    teacherList: [];
    studentList: [];

    constructor( startDate: moment.Moment, endDate: moment.Moment, teacherList: [], studentList: []) {
        this.startDate = startDate,
        this.endDate = endDate,
        this.teacherList = teacherList,
        this.studentList = studentList
    }
}