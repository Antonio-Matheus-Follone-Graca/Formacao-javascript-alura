let livros = []
// api
const endpointDaApi ='https://guilhermeonrails.github.io/casadocodigo/livros.json'
// chamando função
getBuscarLivrosDaApi()


async function getBuscarLivrosDaApi() {
    // chamando api
    const res = await fetch(endpointDaApi) 
    // convertendo resultados da endpointDaApi para json
    livros = await res.json()
    //console.table(livros)
    let livrosComDesconto = aplicarDesconto(livros) // função no arquivo metodoMap.js
    exibirOsLivrosNaTela(livrosComDesconto) // função no arquivo exibirOsLivrosNaTela.js
}

