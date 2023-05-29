import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";
// selecionando todos os elementos que tiveram os elementos required dos inputs. required é um data atributte
const camposDoFormulario = document.querySelectorAll('[required]');
//console.log(camposDoFormulario); retorna um array com todos os elementos
//percorrendo todos os campos
camposDoFormulario.forEach((campo) =>{
    // ao evento blur de cada campo, chama a função verificaCampo()
    campo.addEventListener('blur',() => verificaCampo(campo));
})

function verificaCampo(campo) {
    // se o nome do campo for cpf e possuir mais de 11 strings
    if (campo.name == 'cpf' && campo.value.length >= 11 ){
        // chamando função  do valida-cpf.js
        ehUmCPF(campo)
    }
    if(campo.name =='aniversario' && campo.value != "" ) {
        // chamando função do valida-idade.js
        ehMaiorDeIdade(campo);

    }
    
}