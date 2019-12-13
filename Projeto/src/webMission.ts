import { Student } from './student';
import { Teacher } from './teacher';
import { Mission } from "./mission";
import moment = require("moment");

export class WebMission extends Mission {
    patron: string;

    constructor(patron: string, startDate: moment.Moment, endDate: moment.Moment, teacherList: Teacher, studentList: Student){
        super(startDate, endDate, teacherList, studentList)
        this.patron = patron
    }
}

//Função para criar turma