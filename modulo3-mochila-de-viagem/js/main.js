// guardando formulário numa variável
const form = document.getElementById("novoItem") 
const lista = document.getElementById("lista")
// array para poder inserir várias informações em um mesmo objeto no local storage
//pega os dados do local storage de name itens, caso esteja vázio cria um local storage
const itens = JSON.parse(localStorage.getItem("itens")) || []  

itens.forEach( (elemento) => {    
    criaElemento(elemento)
    console.log(elemento)
} )

// evento de submit é para quando envia o formulári
form.addEventListener("submit", (evento) => {  
    evento.preventDefault()// Cancela o evento se for cancelável, sem parar a propagação do mesmo. No caso do evento submit, ele recarrega a página, por isso o preventdefault para evitar de recarregar a  página
    //console.log(evento);
    // pegando  valores dos campos

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    // pesquisando se o campo nome já existe no array itens 
    const existe = itens.find( elemento => elemento.nome === nome.value)
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
        }
    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    }
    else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }
   
    // usando localStorage para salvar dados no navegador
    // local storage só aceita string, por isso o JSON.stringify
    localStorage.setItem("itens", JSON.stringify(itens))
    // limpando valores do formulário após o submit
    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {  
    // criando um elemento, uma tag
    // <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")
    const numeroItem = document.createElement('strong')
    // innerHTML é o conteudo entre as tags, exemplo <strong> 5 </strong> o 5 é o conteúdo do innerHTMl
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    // adicionando na tag li, a tag strong, ficando <li class="item"> <strong> quantidade </strong> </li>
    novoItem.appendChild(numeroItem)
    // adicionando o nome 
    novoItem.innerHTML += item.nome
    // adicionando a lista a variavel novoItem
    lista.appendChild(novoItem)
    // adicionando botão 
    novoItem.appendChild(BotaoDeleta(item.id))
}

function atualizaElemento(item){  
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade

}

function BotaoDeleta(id_elemento){
    // criando um botão
    const elementoBotao = document.createElement('button')
    elementoBotao.innerHTML = 'X'
    // adicionando evento ao botao
    elementoBotao.addEventListener('click',function(){
        console.log(this) // retorna o botão clicado
        // função de remover botão,  remove o pai do botão, no caso a lista e junto com ela o botão vai junto 
        deletaElemento(this.parentElement,id_elemento) 
    })
    return elementoBotao
}

function deletaElemento(tag,id_elemento){
    // removendo o código html
    tag.remove()
    // remover item do array
    itens.splice(itens.findIndex(elemento => elemento.id === id_elemento), 1)
    // escrevendo no local storage
    localStorage.setItem("itens", JSON.stringify(itens))
}