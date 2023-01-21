// itens do menu
const $itensMenu = document.querySelectorAll('.btn-itens-menu')
let $subItemMenu

// subitens do menu
const $subItensMenu = document.querySelectorAll('.subitem-menu')

// funções
const clicarItemMenu = ($button) => $button.addEventListener('click', () => {
  $subItemMenu = $button.parentNode.querySelector('.dropdown-itens-close')
  abrirSubItensMenu($subItemMenu)
})

const clicarSubItemMenu = ($button) => $button.addEventListener('click', () => {
  // window.location.reload()
})

const abrirSubItensMenu = ($subItemMenu) => {
  const diferenteDoItemAtual = !$subItemMenu.classList.contains('dropdown-itens-open')  
  
  if(diferenteDoItemAtual) fecharTodosSubItensMenu()    
  
  $subItemMenu.classList.toggle('dropdown-itens-open')
  bloquearFundoAoClicar()
  
}

const fecharTodosSubItensMenu = () => {
  const $subItensMenu = document.querySelectorAll('.dropdown-itens-close')

  $subItensMenu.forEach($subItemMenu => {
    $subItemMenu.classList.remove('dropdown-itens-open')
    desbloquearFundoAoClicar()
  })
}

const bloquearFundoAoClicar = () => {
  const $fundo = document.querySelector('.bloquear-fundo')
  $fundo.classList.toggle('hidden')
}

const desbloquearFundoAoClicar = () => {
  const $fundo = document.querySelector('.bloquear-fundo')
  $fundo.classList.add('hidden')
}

document.addEventListener('click', (e) => {

  if(e.target.localName != 'button') {
    desbloquearFundoAoClicar()
    fecharTodosSubItensMenu()
  }  
})

// chama a funções de captura do click
$itensMenu.forEach(clicarItemMenu)
$subItensMenu.forEach(clicarSubItemMenu)