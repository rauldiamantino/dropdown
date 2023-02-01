const menuDetails = ($filtroBuscaTagsDetail:NodeList) => {

  document.addEventListener('click', (event:any) => {
    const $areaExterna:HTMLElement = document.querySelector('.tail-backgrop-menu')      
    const $btnFecharResponsivo:HTMLElement = document.querySelector('.tail-details-btn-fechar')

    $filtroBuscaTagsDetail.forEach(($detail:HTMLElement) => {
      const alvo:HTMLElement = event.target    
      const $itensDetailClicada:HTMLElement = alvo.parentNode.querySelector('.tail-details-itens-menu')
      const $detailAberta:boolean = $detail.hasAttribute('open') && alvo.parentNode == $detail      

      if($detailAberta) {
        ocultaBackdropMenu()
      }      

      exibeBackdropMenu(alvo, $detail)   
      fecharDemaisDetails(alvo, $detail)
      fecharSeClicouFora(alvo, $areaExterna)
      resetarAnimacaoMenuDetails($itensDetailClicada)
      fecharSeClicouBtnRespons(alvo, $btnFecharResponsivo)       
    })
  })

  // funções
  const fecharDemaisDetails = (alvo:HTMLElement, $detail:HTMLElement) => {  
    if(alvo.parentNode == $detail) {
      $filtroBuscaTagsDetail.forEach(($tagDetail:HTMLElement) => {
        const $detailAtual = $tagDetail == alvo.parentNode

        if (! $detailAtual) {
          $tagDetail.removeAttribute('open')        
        }           
      })      
    }   
  }

  const fecharSeClicouFora = (alvo:HTMLElement, $areaExterna:HTMLElement) => {
    if(alvo == $areaExterna) {
      $filtroBuscaTagsDetail.forEach(($detail:HTMLElement) => {      
        $detail.removeAttribute('open')    
        ocultaBackdropMenu()      
      })           
    } 
  }

  const fecharSeClicouBtnRespons = (alvo:HTMLElement, $btnFecharResponsivo:HTMLElement) => {
    if(alvo.parentNode == $btnFecharResponsivo) {    

      $filtroBuscaTagsDetail.forEach(($detail:HTMLElement) => {
          $detail.removeAttribute('open')   
          ocultaBackdropMenu()     
      })      
    }    
  }

  const resetarAnimacaoMenuDetails = ($itensDetailClicada:HTMLElement) => {
    if($itensDetailClicada) {
      $itensDetailClicada.style.animation = "none"
      $itensDetailClicada.offsetHeight
      $itensDetailClicada.style.animation = null
    }
  }

  const exibeBackdropMenu = (alvo:HTMLElement, $detail:HTMLElement) => {
    const $backdrop:HTMLElement = document.querySelector('.tail-backgrop-menu')
    
    if (alvo.parentNode == $detail) {
      $backdrop.classList.remove('hidden')
      removeBackgroundScroll()
    }
  }

  const ocultaBackdropMenu = () => {
    const $backdrop:HTMLElement = document.querySelector('.tail-backgrop-menu')

    $backdrop.classList.add('hidden')
    addBackgroundScroll()
  }

  const removeBackgroundScroll = () => (document.documentElement.style.overflow = "hidden");

  const addBackgroundScroll = () => (document.documentElement.style.overflow = "inherit");
}

export { menuDetails }

