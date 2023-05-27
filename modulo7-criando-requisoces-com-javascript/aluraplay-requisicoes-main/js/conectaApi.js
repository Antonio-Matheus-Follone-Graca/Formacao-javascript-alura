// chamando api 

async function listaVideos () {
    const conexao = await fetch('http://localhost:3000/videos');
    // convertendo para json a conexão
    // await é obrigatório 
    const conexaoConvertida = await conexao.json()
    //console.log(conexaoConvertida); // mostrará os resultados da api
    return conexaoConvertida;
}

// exportando função. Variável com a função.
//Exportar funções é uma ótima maneira de transferi-las para outros programas. Também pode ser usado quando você deseja criar bibliotecas reutilizáveis
export const conectaApi = {
    listaVideos
}