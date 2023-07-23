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


const ol = document.createElement('ol')
body.appendChild(ol)
containerDeItens.appendChild(ol)

function adicionarItemATela() {
  console.log(itemAdicionado)
  itemAdicionado.forEach(item => {
    const li = document.createElement('li')
    ol.appendChild(li)
    li.innerHTML = item
    console.log(itemAdicionado)
  })
}


btnEviarItem.addEventListener('click', () => valorInvalidoParaAdicionarItem(campoDeTexto.value));
// campoDeTexto.addEventListener('input', () => valorInvalidoParaAdicionarItem(campoDeTexto.value))

