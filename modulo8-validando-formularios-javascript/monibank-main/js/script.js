import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
// selecionando todos os elementos que tiveram os elementos required dos inputs. required é um data atributte
const camposDoFormulario = document.querySelectorAll('[required]');
//console.log(camposDoFormulario); retorna um array com todos os elementos
//percorrendo todos os campos
camposDoFormulario.forEach((campo) =>{
    // ao evento blur de cada campo, chama a função verificaCampo()
    campo.addEventListener('blur',() => verificaCampo(campo));
    // ao evento invalid de cada campo, cancela o envio do formulário
    campo.addEventListener('invalid', evento => evento.preventDefault())
})

// array com tipos de erro do validity do javascript

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

// mensagens de erro para cada campo e cada tipo de erro
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagem = '';
    // limpando mensagem de erro
    campo.setCustomValidity('')
    // se o nome do campo for cpf e possuir mais de 11 strings
    if (campo.name == 'cpf' && campo.value.length >= 11 ){
        // chamando função  do valida-cpf.js
        ehUmCPF(campo)
    }
    if(campo.name =='aniversario' && campo.value != "" ) {
        // chamando função do valida-idade.js
        ehMaiorDeIdade(campo);
    }
    // lista de possiveis erros de validações que acontecem automaticamente quando se interage com os campos
    console.log(campo.validity);
    // percorrendo array
    tiposDeErro.forEach(erro =>{
        // se algum campo do formulário, o seu validity retonar true é por quê existe um erro
        if (campo.validity[erro]){
            mensagem =  mensagens[campo.name] [erro];
            console.log(mensagem);
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();
    // se não for true é por quê tem um erro
    if( !validadorDeInput ){
        //TextContent é para mudar apenas o texto de uma tag html
        mensagemErro.textContent = mensagem;
    }
    else{
        mensagemErro.textContent = "";
    }
    
}