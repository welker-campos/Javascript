/**
 * Aula - Calculadora Flex
 * @author Welker Campos
 */

let etanol, gasolina

function calcular() {
    etanol = parseFloat(FrmFlex.txEtanol.value.replace(",", "."))
    gasolina = parseFloat(FrmFlex.txtGasolina.value.replace(",", "."))

    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src = "etanol.png"
    } else {
        document.getElementById("status").src = "gasolina.png"
    }

}
 function resetar(){
    document.getElementById("status").src = "neutro.png"
 }