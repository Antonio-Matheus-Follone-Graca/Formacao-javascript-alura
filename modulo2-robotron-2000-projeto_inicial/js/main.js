const robotron = document.querySelector('#robotron')

// invocando função
// addEventListener espera um evento para executá-lo. Nesse caso no evento click, executa a função dizOi

// arrow function, função anônima
robotron.addEventListener('click',(evento) =>{
    // parametro evento mostrará tudo no console sobre o click
    console.log(evento)
})

function dizOI(nome){
    console.log('oi '+ nome)
    console.log('Seja bem vindo ao robotron 2000')
    // outra forma seria 
    /*document.querySelector('#robotron').onclick = function() {
        console.log('outra forma de usar o evento click')
    }*/

}
dizOI("Pedro")
    