const robotron = document.querySelector('#robotron')

// invocando função
// addEventListener espera um evento para executá-lo. Nesse caso no evento click, executa a função dizOi
robotron.addEventListener('click',dizOI)

function dizOI(){
    console.log('oi')
    // outra forma seria 
    /*document.querySelector('#robotron').onclick = function() {
        console.log('outra forma de usar o evento click')
    }*/

}

//dizOI()
    