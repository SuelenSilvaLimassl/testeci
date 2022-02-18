window.onload = function() {
    
    let pedidos = JSON.parse(localStorage.getItem('pedidos'));
      
    let numeroPedidos = pedidos.length;

    let elemento = "";
    for (var indice = 0; indice < numeroPedidos; indice++ ){
      elemento += "<tr>";
      elemento += "<td>" + pedidos[indice].codigo + "</td>";
      elemento += "<td>" + pedidos[indice].fornecedor + "</td>";
      elemento += "<td>" + pedidos[indice].nomeProduto + "</td>";
      elemento += "<td>" + pedidos[indice].quantidade + "</td>";
      elemento += "<td>" + pedidos[indice].valorProduto + "</td>";
      elemento += "<td>" + pedidos[indice].status + "</td>";
      elemento += "</tr>";
    }
    let tabelaPedidos = document.getElementById("tabelaPedidos");
    tabelaPedidos.innerHTML = elemento;

  };
  