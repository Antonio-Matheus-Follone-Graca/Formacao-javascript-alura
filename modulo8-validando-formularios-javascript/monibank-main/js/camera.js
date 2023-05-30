// data atribute
const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");
let imagemURL = '';


// função assincrona
botaoIniciarCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false });
        
    // alterando o estilo do css dos elementos
    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});

botaoEnviarFoto.addEventListener('click', () => {
    // pegando dados do local storage
    const receberDadosExistentes = localStorage.getItem("cadastro");
    // convertendo para json
    const converteRetorno = JSON.parse(receberDadosExistentes);
    // adicionando atributo imagem com a url da imagem
    converteRetorno.imagem = imagemURL;
    // atualizando o local storage
    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))
    // redirecionando página
    window.location.href = '../pages/abrir-conta-form-3.html';
})
