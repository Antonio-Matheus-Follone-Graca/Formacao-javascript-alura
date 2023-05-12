// guardando formulário numa variável
const formulario =document.getElementById('novoItem');
// evento de submit é para quando envia o formulário
formulario.addEventListener('submit',(evento) =>{
    evento.preventDefault(); // Cancela o evento se for cancelável, sem parar a propagação do mesmo. No caso do evento submit, ele recarrega a página, por isso o preventdefault para evitar de recarregar a  página
    console.log(evento);
    // pegando  valores dos campos
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)
})