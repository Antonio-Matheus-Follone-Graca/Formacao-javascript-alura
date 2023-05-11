document.querySelector('.tecla_pom');

function tocar_audio(id){
    // pegando tag do audio por id e o executando, poderia tirar o onclick que ainda funcionaria
    //document.getElementById(id).onclick =  document.getElementById(id).play()
    /* outra forma de executar o aúdio
    audio = document.querySelector('#'+id)
    audio.play() ou audio.play(audio.src) src é o caminho do aúdio*/
<<<<<<< HEAD
    // refatorando funcao para usar em listas fora da função
    document.querySelector(id).play();
=======
    // refatorando funcao para usar em listas fora da função e de acordo com o vídeo do curso
    const elemento = document.querySelector(id);
    // validações
    if (elemento === null) {
        console.log('Elemento não encontrado')
    }

    // se a tag do elemento não for aúdio, dará erro na hora de executar o aúdi
    if (elemento != null &&  elemento.localName === 'audio') {
        elemento.play()
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
   
>>>>>>> parent of 911f301 (Criando pasta formacao-javascript-alura)
   
}

// usando listas para tocar o aúdio

ListaDeTeclas = document.querySelectorAll('.tecla');
for (let contador = 0 ;contador < ListaDeTeclas.length;contador ++) {
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // segunda classe do elemento, exemplo tecla_pom
    // template string
    const idAudio = `#som_${instrumento}`; // ex som_tecla_pom
    // apenas quando clicar na tecla de um aúdio que a função de tocar aúdio é executada
    // usando função anonônima
    tecla.onclick= function(){
        tocar_audio(idAudio);
    }
<<<<<<< HEAD
=======
    // adicionando outro evento, ao clicar muda a cor de fundo
    tecla.onkeydown = function(evento){
        console.log(evento.code)  // pegando a tecla do teclado

        // se  o usuário apertou essas teclas abaixo, adiciona a classe ativa
        if (evento.code === 'Space' || evento.code ==='Enter')
        {
            // adicionando classe 
            ListaDeTeclas[contador].classList.add('ativa')
        }
       
    }
    // remove classe ao soltar a tecla
    tecla.onkeyup = function () {
        ListaDeTeclas[contador].classList.remove('ativa')
    }
>>>>>>> parent of 911f301 (Criando pasta formacao-javascript-alura)
   
}
