// Crie uma aplicação Node que receba uma string representando o nome da lista de tarefas 
// e uma string representando uma nova tarefa, em seguida o programa deve adicionar a nova tarefa 
// em um arquivo que tenha o nome da lista de tarefas.

const fs = require('fs');
const taskListName = process.argv[2]; 
const newTask =  process.argv[3];

try {

    if (taskListName !== undefined) {
        fs.writeFileSync(taskListName);
        console.log("Lista de tarefa adicionada com sucesso!");
    }
  
    if(newTask !== undefined){
        fs.appendFileSync(taskListName, `\n ${newTask}` , 'utf8');
        console.log("Tarefa adicionada com sucesso");
    }

} catch(e) {
    console.error(e)
}


