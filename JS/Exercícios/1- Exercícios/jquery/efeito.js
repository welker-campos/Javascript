/**
 * Efeito Js
 * @author Welker Silverio de Campos
 * Exemplos de Funções Jquery se comportando com if else
 */

$(document).ready(function(){
    $('ul.Destaque li img').hover (function(){
   	 $('ul.Destaque li img').not(this).stop().fadeTo(500,0.5)
    },function(){
        $('ul.Destaque li img').stop().fadeTo(400,1)
    })
  })
  
  