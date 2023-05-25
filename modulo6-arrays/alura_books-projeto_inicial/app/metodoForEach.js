// para separar os arquivos
const elementoParaInserirLivros = document.getElementById('livros')
function exibirOsLivrosNaTela(listaDeLivros){
    // limpando tela
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
      // função que verifica se os livros estão disponiveis(quantidade acima de 0)
      //let disponibilidade = verificarDisponibilidadeDoLivro(livro)
      // if ternário. A forma acima também funciona 
        let disponibilidade = livro.quantidade  > 0 ?'livro__imagens' : 'livro__imagens indisponivel'
        // inserindo livros no html
        elementoParaInserirLivros.innerHTML +=`
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
         ${livro.titulo}
          
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2).replace('.',',')}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    });

}

function verificarDisponibilidadeDoLivro(livro) {
  if (livro.quantidade > 0){
    // retorna uma classe
    return 'livro__imagens'
    
  }
  else{
    return 'livro__imagens indisponivel'
  }

}
