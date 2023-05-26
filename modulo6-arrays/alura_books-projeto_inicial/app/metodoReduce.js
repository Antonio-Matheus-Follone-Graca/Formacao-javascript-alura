/* 
    O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
    Ex:
    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );

    console.log(sumWithInitial); exibira o valor 10 que é a soma de todos os valores
    A função reducer recebe quatro parâmetros:
    Acumulador (acc)
    Valor Atual (cur)
    Index Atual (idx)
    Array original (src)
O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.
*/ 

// função calcularValorTotalDeLivrosDisponiveis é chamada no metodoFilter.js
function calcularValorTotalDeLivrosDisponiveis(livros){
    return livros.reduce((acumulador,livro) => acumulador +livro.preco, 0).toFixed(2) // primeiro indice vale 0
}