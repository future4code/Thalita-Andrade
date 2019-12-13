import { User } from './user';
import * as moment from 'moment';


export class Student implements User {
    classMission: [];
    name: string;
    email: string;
    dateOfBirth: moment.Moment;

    constructor(classMission:[], name: string, email: string, dateOfBirth: moment.Moment){
        this.classMission = classMission,
        this.name = name,
        this.email = email,
        this.dateOfBirth = dateOfBirth
    }
}