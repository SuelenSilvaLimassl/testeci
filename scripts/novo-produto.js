function salvarProduto() {
    
    const nomeProduto = document.getElementById("nome").value;
    const valorProduto = document.getElementById("valor").value;
    
    if (!nomeProduto || !valorProduto) {
        alert("Você precisa preencher todos os campos.")
        return
    }
    if(valorProduto <= 0){
        alert("O valor precisa ser maior que zero.")
        return
    }
    
    let produto = {
        codigo: Math.random() * 100,
        nome: nomeProduto,
        valor: valorProduto
    };
    
    let produtos = localStorage.getItem("produtos");

    if (!produtos) {
        produtos = [produto];
    } else {
        produtos = JSON.parse(produtos);
        produtos.push(produto);

    }

    localStorage.setItem("produtos", JSON.stringify(produtos));

    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""

}