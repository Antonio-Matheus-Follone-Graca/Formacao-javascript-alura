// importando arquivo conectaApi.js 
import { conectaApi } from "./conectaApi.js";

// acessando data atributte da linha 37 do index.html
const lista = document.querySelector('[data-lista]');

// função que coloca os vídeos na index.html

// exportando essa função para usa-la no buscarVideo.js
export default function constroiCard(titulo,descricao,url,imagem) {
    // criando elemento
    const video = document.createElement('li');
    // adicionando classe
    video.className = 'videos__item';
    // adicionando html
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>
    `
    // retornando vídeo com html novo
    return video
}

// função que faz a conexão com a api. Obrigatório usar async e await 
async function listaVideo() {
    // tentanto fazer a listagem de video
    try{
        // chamando a função do import. Variável conectaApi que possui o método de conexão(nesse caso) que foi exportada no conectaApi.js 
        const listApi = await conectaApi.listaVideos();
        // percorrendo cada item da lista de api, pois a api retorna um array
        // e colocando html dentro da lista
        // a cada passagem de array, executa a função(adiciona o html )
        // lista da linha 5. appendChild adiciona o filho do elemento, nesse caso dentro de ul 
        listApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo,elemento.descricao,elemento.url,elemento.imagem)));
    }
    catch {
        lista.innerHTML = `<h2 class="mensagem_titulo"> Não foi possível carregar a lista de vídeos </h2>`
    }

}

// chamando listaVideo
listaVideo()