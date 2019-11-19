/**
 * Regra de 3 
 * @author Welker Campos
 */

let X, Y, resul

function Calcular() {

    X = Number(frmRegra3.txtX.value.replace(",", "."))
    Y = Number(frmRegra3.txZ.value.replace(",", "."))
    resul = (X*Y) /100
    frmRegra3.TxResultado.value = resul.toFixed(2)
}



for(let i; > 10 )