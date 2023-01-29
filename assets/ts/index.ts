const $todasDetails:NodeList = document.querySelectorAll('details')

document.addEventListener('click', (event:any) => {
  const $areaExterna:HTMLElement = document.querySelector('main')      
  const $btnFecharResponsivo:HTMLElement = document.querySelector('.btn-fechar-details')

  $todasDetails.forEach(($detail:HTMLElement) => {
    const alvo:HTMLElement = event.target    
    const $itensDetailClicada:HTMLElement = alvo.parentNode.querySelector('.details-itens-menu')

    fecharDemaisDetails(alvo, $detail)
    fecharSeClicouFora(alvo, $areaExterna)
    fecharSeClicouBtnResponsivo(alvo, $btnFecharResponsivo)
    resetarAnimacaoMenuDetails($itensDetailClicada)
  })
})

// funções
const fecharDemaisDetails = (alvo:HTMLElement, $detail:HTMLElement) => {
  if(alvo.parentNode == $detail) {
    $todasDetails.forEach(($detailAtual:HTMLElement) => {
      if ($detailAtual !== alvo.parentNode) {
        $detailAtual.removeAttribute('open')
      }
    })      
  }   
}

const fecharSeClicouFora = (alvo:HTMLElement, $areaExterna:HTMLElement) => {
  if(alvo == $areaExterna) {
    $todasDetails.forEach(($detail:HTMLElement) => {      
      $detail.removeAttribute('open')      
    })      
  } 
}

const fecharSeClicouBtnResponsivo = (alvo:HTMLElement, $btnFecharResponsivo:HTMLElement) => {
  if(alvo.parentNode == $btnFecharResponsivo) {
    $todasDetails.forEach(($detail:HTMLElement) => {
        $detail.removeAttribute('open')
    })      
  }    
}

const resetarAnimacaoMenuDetails = ($itensDetailClicada:HTMLElement) => {
  if ($itensDetailClicada) {
    $itensDetailClicada.style.animation = 'none';
    setTimeout(() => $itensDetailClicada.style.animation = "", 5);
  }
}