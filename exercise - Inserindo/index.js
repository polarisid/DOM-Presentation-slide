document.body.onload = adcElemento;

function adcElemento () {
  // cria um novo elemento div
  // e d� � ele conte�do
  var divNova = document.createElement("div");
  var conteudoNovo = document.createTextNode("Ol�, cumprimentos!");
  divNova.appendChild(conteudoNovo); //adiciona o n� de texto � nova div criada

  // adiciona o novo elemento criado e seu conte�do ao DOM
  var divAtual = document.getElementById("div1");
  document.body.insertBefore(divNova, divAtual);
}