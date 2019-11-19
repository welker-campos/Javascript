/**
 * Consulta de Idade Mínimo
 * @author Welker Silverio de Campos
 */
let idade 
 function consultar(idade){
  idade = Number(frmEleitor.txIdade.value);
 
  if(idade <= 16 ){
      alert("idade Não Permitida a Votar")
      document.getElementById("voto").src = "voto proibido.jpg"

  } else if (idade >=18 && idade >= 70){
      alert("Voto facultativo")
  }
 }