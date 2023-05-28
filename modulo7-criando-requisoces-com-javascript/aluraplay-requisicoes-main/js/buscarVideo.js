// importando arquivo conectaApi.js 
import { conectaApi } from "./conectaApi.js";
import constroiCard from './mostrarVideos.js';


async function buscarVideo(evento) {
    // impedindo de atualizar a página
    evento.preventDefault();
    // pegando  valor do input de pesquisa com o data atribute
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    // chamando o método buscaVideo que está na variável conectaApi que foi exportada em conectaApi.js
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
    // mostrando na tela o termo pesquisado
    const lista = document.querySelector('[data-lista]') // data atribute de index.html
    // enquanto haver um primeiro filho na lista, apaga o primeiro filho
    // assim limpando a tela na hora de pesquisar e mostrar apenas o resultado pesquisado
    // o inner html = '' não limpou a tela
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    // percorrendo cada elemento da busca e colocando html na lista do termo pesquisado
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo,elemento.descricao,elemento.url,elemento.imagem)));

    // validação se não achar nada
    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem_titulo"> Não existem vídeos com esse termo </h2>`
    }
}

// pegando botão de pesquisar com o data atribute
const botaoDePesquisa= document.querySelector('[ data-botao-pesquisa]'); 
// ao clicar no botão de pesquisar, chama a função  buscarVideo
// arrow function com o parametro evento, que pega tudo do elemento clicado e com isso posso impedindo de atualizar a página com o  preventDefault
botaoDePesquisa.addEventListener('click', evento =>buscarVideo(evento))