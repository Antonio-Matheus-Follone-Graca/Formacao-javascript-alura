// buscando pelo data atribute, data atribute. data atribute nos permite armazenar informações extras em elementos HTML padrões e semânticos
const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
// array dos elementos do controle-ajuste
controle.forEach((elementos) =>{
    // console.log(elementos) retorna todos os elementos da classe controle-ajuste
    // quando algum desses elementos forem clicados
    elementos.addEventListener('click',(evento) =>{
       //console.log(evento.target.dataset.controle)  pegando o valor do date atribute
       //console.log(evento.target.parentNode)
       manipulaDados(evento.target.dataset.controle,evento.target.parentNode) // parentNode pega o elemento pai, no caso a div
       atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle) // data atribute data-peca da linha 55 do index.html 
        
    })
})


function manipulaDados(operacao, controle){
    // na div controle pega o data atribute data contador, que está nos campos de input
    const peca = controle.querySelector('[data-contador]')
    if (operacao =='-'){
        peca.value = parseInt(peca.value) -1
    }
    else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca, operacao) {
    const contador = document.querySelector('[data-contador]');

    estatisticas.forEach( (elemento) => {
        if (operacao === '-'){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
            
        }else{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}


