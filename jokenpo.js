/**
 * JoKenPo -  Pedra Papel Tesoura
 */

let face = Math.floor(Math.random() * 3)
let A1 

function jogar() {
    if (document.getElementById('pedra').checked === true) {
        document.getElementById("pc").src = "pcpedra.png"

        document.getElementById('resultado').innerText = "teste"
        A1 = 1
    } else if ((document.getElementById('papel').checked === true)) {
        document.getElementById("pc").src = "pcpapel.png"
        document.getElementById('resultado').innerText = "teste"
        A1 = 2
    } else if ((document.getElementById('tesoura').checked === true)) {
        document.getElementById("pc").src = "pctesoura.png"
        document.getElementById('resultado').innerText = "teste"
        A1 = 1
    }
}

switch (face) {
    case 1: {
        document.getElementById("pc").src = "pcpedra.png"
        break
    }
    case 2: {
        document.getElementById("pc").src = "pcpapel.png"
        break
    }
    case 3: {
        document.getElementById("pc").src = "pcpapel.png"
        break
    }
}



