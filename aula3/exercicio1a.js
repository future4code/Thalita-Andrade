// Exercício 1 Tarde:

const numero1 = Number(prompt("Cite um número:"));
const numero2 = Number(prompt("Cite outro número:"));

if (numero1 === numero2){
  console.log("Erro: os números não podem ser iguais");

} else if (numero1 > numero2){
  console.log(numero1, numero2);

} else if (numero2 > numero1){
  console.log(numero2, numero1);
}