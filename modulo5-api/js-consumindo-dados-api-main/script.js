// acessando api via cep
// fetch faz a requisição
let consultaCep = fetch('https://viacep.com.br/ws/01001000/json')
// então converte em json o resultado
.then( resposta => resposta.json()
// então mostra os dados no console.log
.then( r => {
    // se apresentar um erro nos dados, esse if está na documentação do api viacep 
    if (r.erro){
        throw Error('Esse cep não existe!')
    }
    else{
        console.log(r)
    }
    
}))
// se der um erro na requisição, mostra o erro no console.log
.catch(erro => console.log(erro))
// após o fim da requisição, tendo sucesso ou não com a requisição
.finally(mensagem => console.log('processamento concluído !'));

console.log(consultaCep)