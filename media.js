/**
 * Cálculo da média
 * @author Welker Silverio de Campos
 */

// Variaveis Globais
let nota1, nota2, media

function Calcular() {
    nota1 = Number(frmMedia.txNota1.value.replace(",", "."));
    nota2 = Number(frmMedia.txNota2.valuereplace(",", "."));
    media = (nota1 + nota2) / 2
    Number(frmMedia.TxMedia.value = media.toFixed(1))

}
