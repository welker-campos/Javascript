/**
 * Menu 
 * @author Welker Silverio de Campos 
 */

$(document).ready(function () {
    $('.Hamburguer').click(function () {
        $('.Menu ul').slideToggle()

    }) 
    
    $(window).resize(function () {
        if ($(window).width() >= 480) {
            $('.Menu ul').renoveAttr('Style')
        }
    })
}) 