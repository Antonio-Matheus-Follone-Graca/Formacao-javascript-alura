let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click',ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    // variável livros vem do main.js
    // sort ordena o array, a-b ordena os valores do array
    let livrosOrdenados = livros.sort((a,b) => a.preco -b.preco)
     // exibindo livros filtrados. A função exibirOsLivrosNaTela está no arquivo metodoForEach.js
     exibirOsLivrosNaTela(livrosOrdenados)
}