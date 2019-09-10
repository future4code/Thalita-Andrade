//EXERCÍCIO 1 a)

//Primeira forma de se fazer:
function ex1(){
    const computador = 1000;
    const mouse = 50;
    const teclado = 75;
    const webcam = 200;
    const microfone = 100; 
   
    const precoTotal = (computador + mouse + teclado + webcam + microfone);
    console.log("Preço total é: "+ "R$" + precoTotal)
   }
   
   //Segunda forma de se fazer:
   function ex1b(){
    const produto = ["Computador", "Mouse","Teclado", "WebCam","Microfone"];
   
    const precoDoProduto = [1000, 50, 75, 200, 100];
   
    console.log(produto[0] + " : " + "R$" + precoDoProduto [0]);
    console.log(produto[1] + " : " + "R$" + precoDoProduto [1]);
    console.log(produto[2] + " : " + "R$" + precoDoProduto [2]);
    console.log(produto[3] + " : " + "R$" + precoDoProduto [3]);
    console.log(produto[4] + " : " + "R$" + precoDoProduto [4]);
   
    let soma,p;
    soma = 0;
    for(p=0;p<=4;p++){
    soma = precoDoProduto[p]+soma;}
    console.log("O valor total é: " + "R$" + soma)
   }
   
   ex1()
   