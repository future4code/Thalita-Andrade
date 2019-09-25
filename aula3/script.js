class Post {
    constructor() {
        this.titulo = document.getElementById("titulo").value;
        this.autor = document.getElementById("autor").value;
        this.conteudo = document.getElementById("conteudo").value;
    }
}

let listaDePost = [];

function criarPost(){

    const post = new Post();

    listaDePost.push(post);

    if(document.getElementById("titulo").value!="") {
        document.getElementById("titulo").value=""
    }

    if(document.getElementById("conteudo").value!="") {
        document.getElementById("conteudo").value=""
    }

    if(document.getElementById("autor").value!="") {
        document.getElementById("autor").value=""
    }
}

function postCriados(){

    criarPost();

    let container = document.querySelector(".container");

    container.innerHTML = "";

    for(let post of listaDePost) {
        container.innerHTML += '<div>' +
                                    '<p> ' + post.titulo + '</p>' +
                                    '<p> ' + post.autor + '</p>' +
                                    '<p> ' + post.conteudo + '</p>' +
                                '</div>'
    }
}