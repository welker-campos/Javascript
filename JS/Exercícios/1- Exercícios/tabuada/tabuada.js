/**
 * Super Exemplo Magico de uso laço for
 * @author Welker Silverio de Campos
 */




let i = 1
let j = 1
let valor 


while( i  <= 10) {
    document.write('<p> Tabuada do ' + i + '</p>')
    i++
    
   while (j <= 10) {
     
        document.write( '<p>' +i + 'x'+ j + '=' + (i * j)+ '<br>'+'</p>')
        j++
    } 
    j = 1
    i++
}
