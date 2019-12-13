"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specialty_1 = require("./specialty");
const moment = require("moment");
class Teacher {
    constructor(specialty, name, email, dateOfBirth) {
        this.specialty = specialty,
            this.name = name,
            this.email = email,
            this.dateOfBirth = dateOfBirth;
    }
}
exports.Teacher = Teacher;
const teacher = new Teacher(specialty_1.Specialty.HTML, "Thalita", "thalita.andrade@gmail.com", moment("1996-07-28"));
console.log(teacher);
//# sourceMappingURL=teacher.js.map