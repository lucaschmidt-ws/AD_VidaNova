let carrinho = [];

function adicionarCarrinho(produto) {
  carrinho.push(produto);
  alert(produto + " adicionado ao carrinho!");
}

document.getElementById("pedidoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let nome = this.querySelector("input[type=text]").value;
  let telefone = this.querySelector("input[type=tel]").value;
  let observacoes = this.querySelector("textarea").value;

  let mensagem = `Pedido:\n${carrinho.join(", ")}\nNome: ${nome}\nTelefone: ${telefone}\nObservações: ${observacoes}`;
  let url = `https://wa.me/55${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});
