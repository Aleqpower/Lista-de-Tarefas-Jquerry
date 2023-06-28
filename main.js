$(document).ready(function () {
  // document.getElementById("botao-adicionar")
  const botaoAdicionar = $("#botao-adicionar");
  // garantir que eu peguei o elemento certo
  console.log("botaoAdicionar", botaoAdicionar);

  botaoAdicionar.click(function () {
    // fazer alguma coisa
    console.log("Hello");

    // 1 pegar o text input
    const textInput = $("#nome");

    // 2 pegar o texto dentro desse text input
    const textInputValue = textInput.val();
    console.log("Valor do input de texto", textInputValue);

    // 3 pegar o ul elemento do HTML e trazer para jsLand
    const listaCompleta = $("#Lista-completa");
    console.log($("#Lista-completa"))

    // 4 criar o li com o valor do input
    // 5 pegar o texto e colocar dentro da lista
    $('<li />', {
        text: textInputValue
    }).appendTo(listaCompleta);

  });
});
