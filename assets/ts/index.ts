/* ---- constantes ---- */
const $btnFechar:HTMLElement = document.querySelector('.btn-fechar-details')
const $todosDetails:NodeList = document.querySelectorAll('details')

/* ---- funções ---- */

// fecha detail Ordenar através do botão no responsivo
const fecharTagDetailsOrdenar = () => {
  const $detailsOrdenar:HTMLElement = document.querySelector('.details-menu.ordenar')  

  $detailsOrdenar.removeAttribute('open')
}

// fecha demais details ao clicar em uma
const fecharDemaisDetails = ($detailClicada:HTMLElement) => {
  const $detailsAnimacao:HTMLElement = $detailClicada.querySelector('.details-itens-menu')  

  $detailClicada.addEventListener('click', (event:any) => {
    const alvo = (event.target.localName)  
      
    if(alvo == "summary"){
      resetarAnimacaoMenuDetails($detailsAnimacao)
    }

    $todosDetails.forEach(($detail:HTMLElement) =>  {
      if ($detail !== $detailClicada) {
        $detail.removeAttribute('open')        
      }
    })
  })
}

// fecha details se clicar fora
const $areaExterna:HTMLElement = document.querySelector('main')

$areaExterna.addEventListener('click', () => {
  $todosDetails.forEach(fecharDemaisDetails)
})


const resetarAnimacaoMenuDetails = ($detailsAnimacao:HTMLElement) => {
  $detailsAnimacao.style.animation = 'none';
  setTimeout(() => $detailsAnimacao.style.animation = "", 5);
}

// Chamando as funções
$btnFechar.addEventListener('click', () => fecharTagDetailsOrdenar())

$todosDetails.forEach(fecharDemaisDetails)