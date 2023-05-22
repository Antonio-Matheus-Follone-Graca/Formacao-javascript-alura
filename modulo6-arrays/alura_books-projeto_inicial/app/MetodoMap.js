function aplicarDesconto(livros){
    const desconto = 0.3 //30%
    // variável livrosComDesconto foi declarada no main.js
    livrosComDesconto = livros.map(livro =>{
        // map retorn um rray. o map foi feito para fazemos operação de transformação/alteração nos itens de um array e ao final dessas operações ter uma lista nova com a mesma quantidade de itens da lista base
        // ... faz a copia de um array ou objeto para outro objeto.
        // porém o campo preço será alterado
        return {...livro,preco: livro.preco - (livro.preco*desconto)}
    })
    // return da função
    return livrosComDesconto
}