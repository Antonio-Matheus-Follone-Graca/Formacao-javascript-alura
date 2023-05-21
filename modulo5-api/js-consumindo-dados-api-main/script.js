// usando função assíncrona para usar callbacks chamadas de api
async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";
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
            // acessando elemetentos dos campos do formulário
            var cidade = document.getElementById('cidade');
            var logradouro= document.getElementById('endereco');
            var estado = document.getElementById('estado');
            var bairro = document.getElementById('bairro');
            var complemento = document.getElementById('complemento');
            var numero = document.getElementById('numero');
            // mudando valores dos campos de acordo com o cep
            cidade.value = consultaCepConvertida.localidade
            logradouro.value = consultaCepConvertida.logradouro
            estado.value = consultaCepConvertida.uf;
            bairro.value = consultaCepConvertida.bairro;
            complemento.value= consultaCepConvertida.complemento
            numero.value = consultaCepConvertida.gia
            console.log(consultaCepConvertida);
        }
        return consultaCepConvertida
    }
    // se houver um erro na requisição
    catch(erro){
        mensagemErro.innerHTML = `<p> Cep inválido. Tente novamente ! </p>`
        console.log(erro);
        
    }
   
}

var cep = document.getElementById('cep');
// ao evento focusout no id cep chama a função buscaEndereco
cep.addEventListener('focusout', () =>{
    // colocando o value do cep
    buscaEndereco(cep.value)
})



