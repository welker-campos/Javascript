/**
 * Estudo do Dom 
 * Estudo da Função com passagem de parâmetros 
 
*/
/*
// Sem passagem de Parâmetros
 function ligar(){
    document.getElementById('lamp').src = 'on.jpg'
 }

 function desligar(){
    document.getElementById('lamp').src = 'off.jpg'
 }
 */

//Com passagem de Parâmetros

let recebe
function controlar(recebe) {
    if (recebe == 1) {
        document.getElementById('lamp').src = 'on.jpg'
    } else {
        document.getElementById('lamp').src = 'off.jpg'
    }
}

