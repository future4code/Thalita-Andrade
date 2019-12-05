// Deve ser possível cadastrar um novo evento no seu calendário pessoal, passando o dia, o horário de início, o horário de fim,
//  o nome do evento e um pequeno texto descritivo. Caso a pessoa tente colocar um evento em uma data que já há algo marcado, 
//  uma mensagem de erro deve aparecer.

import { readFile } from 'fs';

const fileCalendar: string = "calendar.json"

type event = {
    name: string,
    description: string,
    date: string
};

const event1 = {
    name: "Evento de tecnologia",
    description: "Evento sobre backend",
    date: "15/12/2019 às 18:30"
};

const getEvents = (err: Error, data: Buffer) => {
    if(err){
        console.error(err);
        return;
    }
    const fileContent: string = data.toString();
    console.log("Arquivo lido com sucesso", fileContent);
};

console.log("1");

readFile(fileCalendar, getEvents);

console.log("2");


// const createEvent = () => {

// }


