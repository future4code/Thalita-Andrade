import * as fs from 'fs'

export class JSONFileManager {
    fileName: string;
    constructor(fileName: string) {
        this.fileName = fileName
    }

    saveToJson(getObjectFromFile: object) {
        fs.writeFileSync(this.fileName, JSON.stringify(getObjectFromFile, null, 2))
    }
    getJSONContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString())
    }
}
