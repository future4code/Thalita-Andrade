// Crie uma aplicação Node que recebe uma string representado uma operação e dois valores 
// e retorna o resultado da operação selecionada utilizando os 2 valore

const operation = process.argv[2];
const firstValue = Number(process.argv[3]);
const secondValue = Number(process.argv[4]);

if (operation === "add") {
    const result = firstValue + secondValue;
    console.log(`O resultado é: ${result}`);
} else if (operation === "sub") {
    const result = firstValue - secondValue;
    console.log(`O resultado é: ${result}`);
} else if (operation === "mult") {
    const result = firstValue * secondValue;
    console.log(`O resultado é: ${result}`);
} else if (operation === "div") {
    const result = firstValue / secondValue;
    console.log(`O resultado é: ${result}`);
} 


