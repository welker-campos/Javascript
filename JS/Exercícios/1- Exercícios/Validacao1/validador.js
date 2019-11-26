/**
 * Validação simples com JS
 * Exemplo de uso das funções do array
 * @author José de Assis
 */

function validacao() {
    // o método abaixo é usado para capturar dados de formulários
    // diversos facilitando a busca
    let formulario = document.forms.frmCadastro
    let nome = formulario.txtNome.value
    let cpf = formulario.txtCpf.value
    let sexo = formulario.sexo.value
    let perfil = formulario.txtPerfil.value
    let erro = false //Apoio não tem erro
    if (nome.indexOf(' ') === -1) {
        alert("Preencher o nome completo")
        erro = true
    }
    if (cpf.lengh != 11) {
        alert("CPF invalido")
        erro = true
    } if (perfil.lengh < 20) {
        alert("Digite pelo menos 20 caracteres")
        erro = true
    } if (erro ==== true) {
        return false
    } else {
        return true
    }
}