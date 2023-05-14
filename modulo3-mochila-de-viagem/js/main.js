// guardando formulário numa variável
const formulario =document.getElementById('novoItem');
const lista = document.getElementById('lista')
// array para poder inserir várias informações em um mesmo objeto no local storage
const itens = [] 
// evento de submit é para quando envia o formulário
formulario.addEventListener('submit',(evento) =>{
    evento.preventDefault(); // Cancela o evento se for cancelável, sem parar a propagação do mesmo. No caso do evento submit, ele recarrega a página, por isso o preventdefault para evitar de recarregar a  página
    console.log(evento);
    // pegando  valores dos campos
    const nome = evento.target.elements['nome'].value
    const quantidade = evento.target.elements['quantidade'].value
    criaElemento(nome,quantidade)
    // limpando valores do formulário após o submit
    nome.value =""
    quantidade.value =""
})

function criaElemento(nome,quantidade){
    // criando um elemento, uma tag
    // <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    const numeroItem = document.createElement('strong')
    // innerHTML é o conteudo entre as tags, exemplo <strong> 5 </strong> o 5 é o conteúdo do innerHTMl
    numeroItem.innerHTML = quantidade
    // adicionando na tag li, a tag strong, ficando <li class="item"> <strong> quantidade </strong> </li>
    novoItem.appendChild(numeroItem) 
    // adicionando o nome 
    novoItem.innerHTML += nome
    // adicionando a lista a variavel novoItem
    lista.appendChild(novoItem)
    // objeto para o local storage
    const itemAtual = {
        'nome':nome,
        'quantidade': quantidade
    }
    itens.push(itemAtual)
    // usando localStorage para salvar dados no navegador
    // local storage só aceita string, por isso o JSON.stringify
    localStorage.setItem('item',JSON.stringify(itens))


}