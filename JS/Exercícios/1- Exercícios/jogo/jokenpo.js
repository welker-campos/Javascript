/**
 * JoKenPo -  Pedra Papel Tesoura
 */

let face = Math.floor(Math.random() * 3+1)
let A1 

function jogar() {
    if ((document.getElementById("Pedra").checked == false &&
        document.getElementById("Papel").checked == false &&
        document.getElementById("Tesoura").checked == false)) {
        alert("Selecione uma Opção")
    } else {
        let cpu = Math.floor(Math.random() * 3)
        switch (cpu) {
            case 0:
                document.getElementById("pc").src = "pcpedra.png"
                break

            case 1:
                document.getElementById("pc").src = "pcpapel.png"
                break

            case 2:
                document.getElementById("pc").src = "pctesoura.png"
                break
        }

        // Retorna o vencedor ou empate 

        if ((document.getElementById("Pedra").checked == true && cpu == 0) || (document.getElementById("Papel").checked == true && cpu == 1) ||
            (document.getElementById("Tesoura").checked == true && cpu == 2)) {

            document.getElementById("placar").innerText = "Empate"
        }
        else if ((document.getElementById("Pedra").checked == true && cpu == 2) ||
            (document.getElementById("Papel").checked == true && cpu == 0) ||
            (document.getElementById("Tesoura").checked == true && cpu == 1)) {
            document.getElementById("placar").innerText = "Jogador venceu"
        } else {
            document.getElementById("placar").innerText = "CPU Venceu"
        }
    }
}

function Resetar() {
    document.getElementById("pc").src = "pc.png"
    document.getElementById("placar").innerText = ""
}


