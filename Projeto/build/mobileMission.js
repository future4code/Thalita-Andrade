"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class MobileMission extends mission_1.Mission {
    constructor(team, startDate, endDate, teacherList) {
        super(startDate, endDate, teacherList);
        this.team = team;
    }
}
exports.MobileMission = MobileMission;
//# sourceMappingURL=mobileMission.js.map