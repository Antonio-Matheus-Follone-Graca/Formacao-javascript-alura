// importando arquivo conectaApi.js 
import { conectaApi } from "./conectaApi.js";

// acessando data atribute de formulário
const formulario = document.querySelector('[data-formulario]');

// função assincrona pois ela chama um método assincrono do  conectaApi.js
async function criarVideo(evento) {
    // impedindo de atualizar a página
    evento.preventDefault();
    // pegando os valores dos campos do formulário
    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    // descrição seu valor será aleatório pois não possui um contador de visualizações o projeto
    const descricao = Math.floor(Math.random()*10).toString();
    // conectando a api e chamando a funcao cria video do conectaApi.js
    
    try {
        await conectaApi.criaVideo(titulo,descricao,url,imagem);
        // redirecionando página
        window.location.href = '../pages/envio-concluido.html'
    }
    catch(error) {
        alert(error);
    }
    

}

// ao evento de submit do formulário
formulario.addEventListener('submit', evento => criarVideo(evento));