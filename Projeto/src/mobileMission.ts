import { Student } from './student';
import { Teacher } from './teacher';
import { Mission } from "./mission";
import moment = require("moment");

export class MobileMission extends Mission {
    team: number;

    constructor(team: number, startDate: moment.Moment, endDate: moment.Moment, teacherList: Teacher, studentList: Student){
        super(startDate, endDate, teacherList, studentList)
        this.team = team
    }
}

//Função para criar turma