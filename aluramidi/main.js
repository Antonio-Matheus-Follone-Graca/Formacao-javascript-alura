document.querySelector('.tecla_pom');

function tocar_audio(id){
    // pegando tag do audio por id e o executando, poderia tirar o onclick que ainda funcionaria
    document.getElementById(id).onclick =  document.getElementById(id).play()
    /* outra forma de executar o aúdio
    audio = document.querySelector('#'+id)
    audio.play() ou audio.play(audio.src) src é o caminho do aúdio*/
   
}