window.onload = function() {
    
    let produtos = JSON.parse(localStorage.getItem('produtos'));
      
    let numeroProdutos = produtos.length;

    let elemento = "";
    for (var indice = 0; indice < numeroProdutos; indice++ ){
      elemento += "<tr>";
      elemento += "<td>" + produtos[indice].codigo + "</td>";
      elemento += "<td>" + produtos[indice].nome + "</td>";
      elemento += "<td>" + produtos[indice].valor + "</td>";
      elemento += "<td></td>"    
      elemento += "</tr>";
    }
    let tabelaProdutos = document.getElementById("tabelaProdutos");
    tabelaProdutos.innerHTML = elemento;

}
  