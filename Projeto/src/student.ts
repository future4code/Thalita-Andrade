import { User } from './user';
import * as moment from 'moment';
import { Mission } from './mission';


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