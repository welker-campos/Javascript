/**
 * Estudo do operador lógico NOT
 * @author Welker Silverio de Campos
 */


let sw1 = false //varivel de apoio á troca da imagem da chave
let broken 

function sw(broken) {
    if (sw1 == false) {
        document.getElementById('sw1').src = "swon.png"
        sw1 = true
    } else {
        document.getElementById('sw1').src = "swoff.png"
        sw1 = false
    }
    if (broken == 1) {
        document.getElementById('lamp').src = "broken.jpg"
        broken = true
    }
    // not
    if (broken == false) {
        if (!sw1) {
            document.getElementById('lamp').src = "on.jpg"
        } else {
            document.getElementById('lamp').src = "off.jpg"
        }
    }
}