// pega todas os elementos com classe btn
const botoes = document.querySelectorAll('.btn')
// percorrendo cada elemento do botões

botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))
 
function filtrarLivros(){
    // pega o id do botão que foi clicado
    const elementoBtn = document.getElementById(this.id) 
    // pegando categoria
    const categoria = elementoBtn.value
    // usando filter do array
    //O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    // array livros está no arquivo main.js
    // categoria é um atributo do objeto json da api
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    // exibindo livros filtrados. A função exibirOsLivrosNaTela está no arquivo metodoForEach.js
    exibirOsLivrosNaTela(livrosFiltrados)
    // exibe livros disponiveis
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        
        exibirValorTotalDosLivrosDisponiveisDaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisDaTela(valorTotal) {
    // a elementoComValorTotalDeLivrosDisponiveis está no arquivo metodoForEach.js
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.replace('.',',')}</span></p>
  </div>
    `
}