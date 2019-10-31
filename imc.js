/**
 * Cálculo da média
 * @author Welker Silverio de Campos
 */

// Variaveis Globais
let peso, altura, imc

function CalcularIMC() {
    peso = Number(frmIMC.txtPeso.value.replace(",", "."));
    altura = Number(frmIMC.txtaltura.value.replace(",", "."));
    imc = peso / (altura * altura)
    Number(frmIMC.IMC.value = imc.toFixed(2))

}