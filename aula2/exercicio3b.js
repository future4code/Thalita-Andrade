//EXERCÍCIO 3 b)

const estaChovendo = confirm("Está chovendo?");

const temGuardaChuva = confirm("Tem guarda-chuva?");

const vaiSeMolhar = estaChovendo && !temGuardaChuva;

console.log("O usuário vai se molhar? " + vaiSeMolhar)
