import { Specialty } from './specialty';
import { Patrons } from './padron';
import { Teacher } from './teacher';
import { Mission } from "./mission";
import moment = require("moment");

export class WebMission extends Mission {
    patron: Patrons;

    constructor(patron: Patrons, startDate: moment.Moment, endDate: moment.Moment, teacherList: Teacher[]){
        super(startDate, endDate, teacherList)
        this.patron = patron
    }
}

const teacher1 = new Teacher(Specialty.CSS, "Sayonara", "sayonara@gmail.com", moment("1997-02-28"))
const webMission: WebMission = new WebMission(Patrons.NEWTON, moment("2020-01-01"), moment("2020-06-30"), [teacher1])
console.log(webMission)