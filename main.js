$(function(){
  $("#botao-adicionar").click(function(){
    var nome=$("#nome").prop("value");
    var atual=$("#lista-completa").html();
    $("#lista-completa").html(atual+"<li>"+nome+"</li>");
  });
  function taxado(){
    $("li").click(function(){
      $(this).addClass("decorar");
    })
  }
  setInterval(taxado,100);
});

