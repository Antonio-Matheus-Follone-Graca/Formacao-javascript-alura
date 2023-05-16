
// api web speech  api.Documentação: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

// utilizando reconhecimento de voz no evento result, chama a função onSpeak
recognition.addEventListener('result',onSpeak)

const elementoChute =document.getElementById('chute')

function onSpeak(e){
    // mostrando o que o usuário falou
    chute = e.results[0][0].transcript
    console.log(e.results[0][0].transcript)
    exibeChuteNaTela(chute)
}

function exibeChuteNaTela( chute) {
    elementoChute.innerHTML = `
        <div> Você disse </div>
        <span class="box">${chute} </span>
    `

}