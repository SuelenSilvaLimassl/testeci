function salvarPedido() {
    const fornecedor = document.getElementById("fornecedor").value;
    const nomeProduto = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;
    const valorProduto = document.getElementById("valor").value;
    const status = document.getElementById("status").value;

    if(!fornecedor || !nomeProduto || !quantidade || !valorProduto){
        alert("Você precisa preencher todos os campos.")
        return
    }

    if(quantidade <= 0 || valorProduto <= 0){
        alert("O valor e quantidade precisam ser maiores que zero.")
        return
    }

    const pedido = {
        codigo: Math.random() * 1000,
        fornecedor: fornecedor,
        nomeProduto: nomeProduto,
        quantidade: quantidade,
        valorProduto: valorProduto,
        status: status
    }

    let pedidos = localStorage.getItem("pedidos");

    if (!pedidos) {
        pedidos = [pedido];
    } else {
        pedidos = JSON.parse(pedidos);
        pedidos.push(pedido);

    }

    localStorage.setItem("pedidos", JSON.stringify(pedidos))

    document.getElementById("fornecedor").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("status").value = "aberto";




    /*var codigo = parseInt(Math.random() * 1000);

    localStorage.setItem("codigo", codigo)

    alert(localStorage.getItem('codigo'))

    localStorage.setItem("pedidos", JSON.stringify([]))

    var pedidos = localStorage.getItem("pedidos")
    
    console.log(pedidos)*/

    /*var pedidos = localStorage.getItem("pedidos")

    if (!pedidos) {
        pedidos = []        
    } else {
        pedidos = JSON.parse(pedidos)
        pedidos.push("susuDev")
    }

    localStorage.setItem("pedidos", JSON.stringify(pedidos))
*/


    /*const fornecedor = document.getElementById("fornecedor").value;
    const nomeProduto = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;
    const valorProduto = document.getElementById("valor").value;

    if (!fornecedor || !nomeProduto || !quantidade || !valorProduto) {
        alert("Você precisa preencher todos os campos.")
        return
    }

    const novoPedido = {
        codigoNotaFiscal: 1,
        fornecedor: fornecedor,
        nomeProduto: nomeProduto,
        quantidade: quantidade,
        valorProduto: valorProduto
    }
    
    var pedidos = localStorage.getItem('pedidos')

    if(pedidos) {
        pedidos.push(produto)
    }

    localStorage.setItem("pedidos", JSON.stringify(novoPedido))
    
    console.log(novoPedido)
*/
}