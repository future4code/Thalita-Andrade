"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
fs_1.readdir("textos", function (err, files) {
    if (err) {
        console.log("Error getting file information.");
    }
    else {
        files.forEach(function (file) {
            console.log(file);
        });
    }
});
//# sourceMappingURL=Exercicio1.js.map