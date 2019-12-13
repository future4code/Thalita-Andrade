"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specialty_1 = require("./specialty");
const padron_1 = require("./padron");
const teacher_1 = require("./teacher");
const mission_1 = require("./mission");
const moment = require("moment");
class WebMission extends mission_1.Mission {
    constructor(patron, startDate, endDate, teacherList) {
        super(startDate, endDate, teacherList);
        this.patron = patron;
    }
}
exports.WebMission = WebMission;
const teacher1 = new teacher_1.Teacher(specialty_1.Specialty.CSS, "Sayonara", "sayonara@gmail.com", moment("1997-02-28"));
const webMission = new WebMission(padron_1.Patrons.NEWTON, moment("2020-01-01"), moment("2020-06-30"), [teacher1]);
console.log(webMission);
//# sourceMappingURL=webMission.js.map