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
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map