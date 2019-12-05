// Crie um programa que imprime na tela todos os conteúdos de todos os arquivos 
// de uma pasta, a pasta contém textos mockados

import { readdir } from 'fs';

readdir("textos", function(err, files: string[]){
    if(err) {
        console.log("Não foi possível encontrar o arquivo.")
    } else {
        files.forEach(function(file: string) {
           console.log(file)
        })
    }
})
