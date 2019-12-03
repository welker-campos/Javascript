/**
 * Exemplos de Uso de plugin JQuery
 * @author Welker Silverio de Campos
 */


 $(document).ready(function(){
    $('#frmCastro').validate({
        rules:{
            nome:{
               required:true,
               minlength: 4
            },
            email:{
                required:true,
                email: true
            }, 
            senha:{
                required:true,
                minlength: 8
                
            },
            senhaConfirmacao:{
                required:true,
                equalTo: senha
        
            },
            termos:{
                required:true

            }
        },

        messages:{
            name:{
                required: " Favor digitar o nome",
                minlength:" O campos nome deve ter no mínimo 4 caracteres"
            },
            email:{
                required: " O campo Email é obrigatório",
                email: " E-mail invalido"

            }, 
            senha:{
                required: " O campos obrigatorio",
                minlength: " A senha deve ter no mínimo 8 caracter"
            },
            senhaConfirmacao:{
                required:" O campos obrigatorio",
                equalTo: " As senhas digitadas não são iguais",
            },
            termos:{
                required:" Para se cadastrar é necessario aceitar os termos"

            }
        }
    })
 })