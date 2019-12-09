import * as fs from 'fs' 

// getObjectFromFile(): object
// writeObjectToFile(): void;

export class JSONFileManager {
    fileName: string;
    constructor( fileName: string ){
        this.fileName = fileName
    }

    saveToJson(getObjectFromFile: object) {
        fs.writeObjectToFile(this.fileName, JSON.stringify(getObjectFromFile, null, 2))
    }
}