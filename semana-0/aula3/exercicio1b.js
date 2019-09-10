// Exercício 1 b)

const numero1 = Number(prompt("Cite um número:"));
const numero2 = Number(prompt("Cite outro número:"));
const numero3 = Number(prompt("Cite outro número:"));


if (numero1 === numero2 || numero2 === numero3 || numero1 === numero3){
  console.log("Erro: os números não podem ser iguais");

} else if (numero1 > numero2 && numero2 > numero3){
  console.log(numero1, numero2, numero3);

} else if (numero1 > numero3 && numero3 > numero2){
  console.log(numero1, numero3, numero2);

} else if (numero2 > numero1 && numero1 > numero3){
  console.log(numero2, numero1, numero3);

} else if (numero2 > numero3 && numero3 > numero1){
  console.log(numero2, numero3, numero1);

} else if (numero3 > numero1 && numero1 > numero2){
  console.log(numero3, numero1, numero2);

} else if (numero3 > numero2 && numero2 > numero1){
  console.log(numero3, numero2, numero1);
}