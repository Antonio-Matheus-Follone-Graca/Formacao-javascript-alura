const menorValor = 1
const maiorValor = 10
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    // número entre 0 e 100 
    return parseInt (Math.random() *maiorValor +1)
}

console.log('Número secreto:',numeroSecreto)

// alterando o texto do index.html nos valores
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

