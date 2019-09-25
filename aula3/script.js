class Post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

let listaDePost = [];

function criarPost(){
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const conteudo = document.getElementById("conteudo").value;

    const post = new Post(titulo, autor,conteudo);

    listaDePost.push(post);

    console.log(listaDePost)

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

const container = document.querySelector(".container");

for(let post of listaDePost) {
    container.innerHTML += '<div>' +
                                '<p> Título: ' + post.titulo + '</p>' +
                                '<p> Autor: ' + post.autor + '</p>' +
                                '<p> Conteúdo: ' + post.conteudo + '</p>' +
                            '</div>'
}

