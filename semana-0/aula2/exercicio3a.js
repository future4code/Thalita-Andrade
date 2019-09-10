//EXERCÍCIO 3 a)

const casaDestrancada = confirm("A Casa está destrancada?");

const chave = confirm("Você tem a chave da casa?");

const consegueEntrarNaCasa = casaDestrancada || chave;

console.log("O usuário consegue entrar na casa? " + consegueEntrarNaCasa)