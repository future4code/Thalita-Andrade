"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const padron_1 = require("./padron");
const specialty_1 = require("./specialty");
const teacher_1 = require("./teacher");
const moment = require("moment");
const webMission_1 = require("./webMission");
class Student {
    constructor(classMission, name, email, dateOfBirth) {
        this.classMission = classMission,
            this.name = name,
            this.email = email,
            this.dateOfBirth = dateOfBirth;
    }
}
exports.Student = Student;
const teacher = new teacher_1.Teacher(specialty_1.Specialty.JS, "Dielly", "dielly@gmail.com", moment("1983-08-14"));
const mission = new webMission_1.WebMission(padron_1.Patrons.BOUMAN, moment("2020-01-01"), moment("2020-06-30"), [teacher]);
const student1 = new Student(mission, "Gabriela", "gabriela@gmail.com", moment("1997-01-17"));
console.log(student1);
//# sourceMappingURL=student.js.map