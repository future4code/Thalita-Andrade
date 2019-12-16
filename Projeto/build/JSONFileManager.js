"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    saveToJson(getObjectFromFile) {
        fs.writeFileSync(this.fileName, JSON.stringify(getObjectFromFile, null, 2));
    }
    getJSONContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
}
exports.JSONFileManager = JSONFileManager;
const fileManager = new JSONFileManager("team.json");
fileManager.saveToJson({ "missions": [], "students": [], "teachers": [] });
//# sourceMappingURL=JSONFileManager.js.map