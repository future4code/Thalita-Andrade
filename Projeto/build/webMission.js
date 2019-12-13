"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class WebMission extends mission_1.Mission {
    constructor(patron, startDate, endDate, teacherList, studentList) {
        super(startDate, endDate, teacherList, studentList);
        this.patron = patron;
    }
}
exports.WebMission = WebMission;
//# sourceMappingURL=webMission.js.map