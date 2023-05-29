export default function ehMaiorDeIdade(campo){
    const dataNascimento  = new Date(campo.value)
    if( !validaIdade(dataNascimento) ){
        // usando validity com mensagem personalizada,altera a mensagem do customError.No caso a lógica entrará na linha 72 do script.js 
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade(data) {
    const dataAtual = new Date ();
    // pegando o ano, mês e dia passados pelo usuário
    //console.log(data.getUTCFullYear()+18); pega o ano que a pessoa atingiu a maioridade
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return  dataAtual >= dataMais18
  
}

