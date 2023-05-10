document.querySelector('.tecla_pom');

function tocar_audio(id){
    // pegando tag do audio por id e o executando, poderia tirar o onclick que ainda funcionaria
    //document.getElementById(id).onclick =  document.getElementById(id).play()
    /* outra forma de executar o aúdio
    audio = document.querySelector('#'+id)
    audio.play() ou audio.play(audio.src) src é o caminho do aúdio*/
    // refatorando funcao para usar em listas fora da função
    document.querySelector(id).play();
   
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
   
}
