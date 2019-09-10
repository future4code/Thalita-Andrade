// Exercício 2 b)

const animal = confirm("É um animal?");

if (animal === false) {

  const possuiFolha = confirm("Possui folhas?");

  if (possuiFolha === true) {
    console.log("É uma planta!");

  } else {
    console.log("É uma pedra!");
  }

} else if (animal === true) {
  const pelo = confirm("Tem pelo?");

  if (pelo === true) {
    const late = confirm("Ele late?");

    if (late === true) {
      console.log("É um cachorro!");

    } else if (late === false) {
      const roedor = confirm("É um roedor?");

      if (roedor === true) {
        console.log("É um rato!");

      } else {
        console.log("É um gato!");
      }
    }

  } else if (pelo === false) {
    const voa = confirm("Ele voa?");
    if (voa === true) {
      console.log("É um pássaro!");
    } else if (voa === false) {
      const pernas = confirm("Ele tem pernas?");
      if (pernas === true) {
        console.log("É um sapo!");
      } else {
        console.log("É um peixe!");
      }
    }
  }
}
