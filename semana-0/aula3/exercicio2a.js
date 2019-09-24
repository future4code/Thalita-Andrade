// Exercício 2 a)

const animal = confirm("É um animal?");

if (animal === false) {
  console.log("É uma pedra");

} else if (animal === true) {
  const pelo = confirm("Tem pelo?");

  if (pelo === true) {
    const late = confirm("Ele late?");
    if (late === true) {
      console.log("É um cachorro")
    } else if (late === false) {
      console.log("É um gato")
    }

  } else if (pelo === false) {
    const voa = confirm("Ele voa?");
    if (voa === true) {
      console.log("É um pássaro")
    } else if (voa === false) {
      console.log("É um peixe")
    }
  }

}
