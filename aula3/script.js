class Post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

function criarPost(){
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const conteudo = document.getElementById("conteudo").value;

    const post = new Post(titulo, autor,conteudo);

    console.log(post)
}

