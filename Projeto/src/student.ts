import { Patrons } from './padron';
import { Specialty } from './specialty';
import { Teacher } from './teacher';
import { User } from './user';
import * as moment from 'moment';
import { Mission } from './mission';
import { WebMission } from './webMission';


export class Student implements User {
    classMission: Mission;
    name: string;
    email: string;
    dateOfBirth: moment.Moment;

    constructor(classMission:Mission, name: string, email: string, dateOfBirth: moment.Moment){
        this.classMission = classMission,
        this.name = name,
        this.email = email,
        this.dateOfBirth = dateOfBirth
    }
}

const teacher = new Teacher(Specialty.JS, "Dielly", "dielly@gmail.com", moment("1983-08-14"))
const mission = new WebMission(Patrons.BOUMAN, moment("2020-01-01"), moment("2020-06-30"), [teacher])
const student1: Student = new Student(mission ,"Gabriela", "gabriela@gmail.com", moment("1997-01-17"))
console.log(student1)