export default function ehMaiorDeIdade(campo){
    const dataNascimento  = new Date(campo.value)
    validaIdade(dataNascimento)
    console.log(validaIdade(dataNascimento));
}

function validaIdade(data) {
    const dataAtual = new Date ();
    // pegando o ano, mês e dia passados pelo usuário
    //console.log(data.getUTCFullYear()+18); pega o ano que a pessoa atingiu a maioridade
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return  dataAtual >= dataMais18
  
}

