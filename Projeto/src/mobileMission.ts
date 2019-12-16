import { Teacher } from './teacher';
import { Mission } from "./mission";
import moment = require("moment");

export class MobileMission extends Mission {
    team: number;

    constructor(team: number, startDate: moment.Moment, endDate: moment.Moment, teacherList: Teacher[]){
        super(startDate, endDate, teacherList)
        this.team = team
    }
}
