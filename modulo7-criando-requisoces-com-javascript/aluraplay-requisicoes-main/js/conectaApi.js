// chamando api 

async function listaVideos () {
    const conexao = await fetch('http://localhost:3000/videos');
    // convertendo para json a conexão
    // await é obrigatório 
    const conexaoConvertida = await conexao.json()
    //console.log(conexaoConvertida); // mostrará os resultados da api
    return conexaoConvertida;
}

// função de post

async function criaVideo(titulo,descricao,url,imagem) {
    // método de post para inserir um vídeo. Conexão no primeiro parametro e função de post no segundo
    const conexao = await fetch('http://localhost:3000/videos',{
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            // dados que quero cadastrar. Campo: valor
            titulo : titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,

        })
    });
    // convertendo para json a conexao com api
    const conexaoConvertida = await conexao.json() 
    return conexaoConvertida
}

// exportando função. Variável com a função.
//Exportar funções é uma ótima maneira de transferi-las para outros programas. Também pode ser usado quando você deseja criar bibliotecas reutilizáveis

// essa variável será utilizada em vários arquivos para conexão com api e cria video
export const conectaApi = {
    listaVideos,
    criaVideo
}