import * as moment from 'moment'

export interface User {
    name: string,
    email: string,
    dateOfBirth: moment.Moment
}