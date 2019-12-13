import { User } from './user';
import * as moment from 'moment'

export class Teacher implements User{
    specialty: string;
    name: string;
    email: string;
    dateOfBirth: moment.Moment;

    constructor(specialty:string, name: string, email: string, dateOfBirth: moment.Moment){
        this.specialty = specialty,
        this.name = name,
        this.email = email,
        this.dateOfBirth = dateOfBirth
    }
}