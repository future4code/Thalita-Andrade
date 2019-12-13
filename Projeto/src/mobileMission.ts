import { Mission } from "./mission";
import moment = require("moment");

export class MobileMission extends Mission {
    team: number;

    constructor(team: number, startDate: moment.Moment, endDate: moment.Moment, teacherList: [], studentList: []){
        super(startDate, endDate, teacherList, studentList)
        this.team = team
    }
}