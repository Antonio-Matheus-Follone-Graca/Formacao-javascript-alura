// exportando função para ser usada em outros arquivos
export default function ehUmCPF(campo) {
    // regex no replace,  substituindo as expressões por nada. Ficando assim apenas os números
    const cpf = campo.value.replace(/\.|-/g, "");
    // se as validações retornarem true  
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        console.log("Esse cpf não existe!")
    } 
    // senão
    else {
            console.log("Existe!")
    }
}

function validaNumerosRepetidos(cpf) {
    // não permitir vários números repetidos
    const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]
    // O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
    // se o array número repetidos conter vários retorna True, senão False
    // retorna true ou false
   return  numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    // retorna true ou false
    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    // retorna true ou false
    return soma != cpf[10];
}