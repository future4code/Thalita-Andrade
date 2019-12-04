// Crie um programa que imprime na tela todos os conteúdos de todos os arquivos 
// de uma pasta, a pasta contém textos mockados

import { readdir } from 'fs';

readdir("textos", function(err, files: string[]){
    if(err) {
        console.log("Error getting file information.")
    } else {
        files.forEach(function(file: string) {
           console.log(file)
        })
    }
})
