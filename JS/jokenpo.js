/**
 * JoKenPo -  Pedra Papel Tesoura
 */

let sorteio = Math.floor(Math.random() * 3)


function jogar() {
    switch (sorteio) {
        case 0: {
            document.getElementById("pc").src = "pcpedra.png"
            break
        }
        case 1: {
            document.getElementById("pc").src = "pcpapel.png"
            break
        }
        case 2: {
            document.getElementById("pc").src = "pcpapel.png"
            break
            //Verifcar o vencedor ou declarar
        } if (((document.getElementById('pedra').checked === true) && (sorteio === 0)) || ((document.getElementById('papel').checked === true) && (sorteio === 1))
            || ((document.getElementById('tesoura').checked === true) && (sorteio === 2))) {
                document.getElementById('resultado').innerText = "Empate"
            }
    }

}

