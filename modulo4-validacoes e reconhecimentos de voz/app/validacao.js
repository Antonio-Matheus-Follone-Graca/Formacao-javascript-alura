function verificaseOChutePossuiUMValorValido(){
    // convertendo string  para número
    const numero = + chute
    // se não for um número
    if (Number.isNaN(numero)){
        elementoChute.innerHTML+= '<div> Valor inválido </div>'
         // após o return não executa mais nada da função
        return 
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += ` <div> valor inválido: Fale um  número  entre  ${menorValor} e ${maiorValor} </div>`
        // após o return não executa mais nada da função
        return 
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2> Você acertou! </h2>
            <h3> O número secreto era ${numeroSecreto} </h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }
    else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número é menor <i class="fa-solid fa-down-long"></i> </div>  -->
        `
    }
    else{
        elementoChute.innerHTML += `
        <div> <div>O número é maior <i class="fa-solid fa-up-long"></i> </div> -->
        `
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

// ao clicar no jogar novamente, reinicia o jogo
document.body.addEventListener('click', e=>{
    // se clicou no jogar novamente 
    if(e.target.id == 'jogar-novamente'){
        // reinicia a página sem a interação do usuário
        window.location.reload()
    }
})
