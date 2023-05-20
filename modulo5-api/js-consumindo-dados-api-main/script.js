// usando função assíncrona para usar callbacks chamadas de api
async function buscaEndereco(cep){
    try{
        // chamando api viacep
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        // convertendo para json
        let consultaCepConvertida = await consultaCep.json();
        // se houver um erro nos dados
        if(consultaCepConvertida.erro){
            throw Error('cep não existente!');
        }
        else{
            console.log(consultaCepConvertida);
        }
        return consultaCepConvertida
    }
    // se houver um erro na requisição
    catch(erro){
        console.log(erro);
    }
   
}

var cep = document.getElementById('cep');
// ao evento focusout no id cep chama a função buscaEndereco
cep.addEventListener('focusout', () =>{
    // colocando o value do cep
    buscaEndereco(cep.value)
})



