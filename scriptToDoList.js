'use strict'
const campoDeTexto = document.getElementById('campoTxt_adicionarItem');
const btnEviarItem = document.getElementById('btn_enviarItem');
const containerDeItens = document.getElementById('ctn_Itens')
const body = document.querySelector('body');
let itemAdicionado = [];

function valorInvalidoParaAdicionarItem(valorCampoTxt) {
  if (valorCampoTxt == "") {
    campoDeTexto.placeholder = "Houve um erro, digite algo aqui para enviar.";
    btnEviarItem.style.backgroundColor = "#f53f3f";
    btnEviarItem.style.color = "white";
  } else {
    puxarValorParaArrayItens(valorCampoTxt);
    btnEviarItem.style.backgroundColor = "white";
    btnEviarItem.style.color = "rgb(99, 99, 99)";
    campoDeTexto.placeholder = "adicionar item a lista";
    campoDeTexto.value = "";
  }
}

function puxarValorParaArrayItens(CampoTxt) {
  itemAdicionado.push(CampoTxt)
  adicionarItemATela()
}


const ul = document.createElement('ul')
body.appendChild(ul)
containerDeItens.appendChild(ul)

function adicionarItemATela() {
  ul.innerHTML = ""
  itemAdicionado.forEach(item => {
    const li = document.createElement('li')
    ul.appendChild(li);
    li.innerHTML = item;
    li.className = "itensDaLista";
  })
  console.log(ul)
  console.log(itemAdicionado)
}


btnEviarItem.addEventListener('click', () => valorInvalidoParaAdicionarItem(campoDeTexto.value));
// campoDeTexto.addEventListener('input', () => valorInvalidoParaAdicionarItem(campoDeTexto.value))

