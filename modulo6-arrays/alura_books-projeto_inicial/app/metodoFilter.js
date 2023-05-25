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
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro =>livro.quantidade >0) : livros.filter(livro => livro.categoria == categoria)
    // exibindo livros filtrados. A função exibirOsLivrosNaTela está no arquivo metodoForEach.js
    exibirOsLivrosNaTela(livrosFiltrados)
    console.log(livrosFiltrados)
}