

function limparInput() {
    if(document.getElementById("input-valorGasto").value!="") {
        document.getElementById("input-valorGasto").value=""
    }

    if(document.getElementById("input-descricaoDoGasto").value!="") {
        document.getElementById("input-descricaoDoGasto").value=""
    }
}

class Despesa {
    constructor(valor, tipo, descricao){
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

let todosGastos = [];

function salvarGasto() {

    let valor = document.getElementById("input-valorGasto").value;
    let tipo = document.getElementById("input-tipoDeGasto").value;
    let descricao = document.getElementById("input-descricaoDoGasto").value;


    const gastos = new Despesa(valor, tipo, descricao);

    todosGastos.push(gastos);

    limparInput()
  
    console.log("todosOsGastos", todosGastos)
}