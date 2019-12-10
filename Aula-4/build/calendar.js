"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fileCalendar = "calendar.json";
const event1 = {
    name: "Evento de tecnologia",
    description: "Evento sobre backend",
    date: "15/12/2019 às 18:30"
};
const getEvents = (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const fileContent = data.toString();
    console.log("Arquivo lido com sucesso", fileContent);
};
fs_1.readFile(fileCalendar, getEvents);
//# sourceMappingURL=calendar.js.map