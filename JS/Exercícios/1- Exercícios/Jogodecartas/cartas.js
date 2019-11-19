/**
 * Jogo de Cartas
 * @author Welker Campos
 */


let face = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q']
let nipes = ['♦', '♠', '♥', '♣']

let f = face[Math.floor(Math.random() * 13)]
let n = [Math.floor(Math.random() * 4)]

document.write('<h1>' + f + n + '</h1>')


