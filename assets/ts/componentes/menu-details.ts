const menuDetails = ($filtroBuscaTagsDetail:NodeList) => {

  document.addEventListener('click', (event:any) => {
    const $areaExterna:HTMLElement = document.querySelector('.tail-backdrop-menu')      
    const $btnFecharResponsivo:HTMLElement = document.querySelector('.tail-details-btn-fechar')

    $filtroBuscaTagsDetail.forEach(($detail:HTMLElement) => {
      const alvo:HTMLElement = event.target    
      const $itensDetailClicada:HTMLElement = alvo.parentNode.querySelector('.tail-details-itens-menu')
      const $detailAberta:boolean = $detail.hasAttribute('open') && alvo.parentNode == $detail      
      
      exibeBackdropMenu(alvo, $detail, $areaExterna)   
      fecharDemaisDetails(alvo, $detail)
      fecharSeClicouFora(alvo, $areaExterna)
      resetarAnimacaoMenuDetails($itensDetailClicada)
      fecharSeClicouBtnRespons(alvo, $btnFecharResponsivo)       

      if ($detailAberta) {
        ocultaBackdropMenu()        
      }
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
      $filtroBuscaTagsDetail.forEach(($tagDetail:HTMLElement) => {      
        $tagDetail.removeAttribute('open')            
        ocultaBackdropMenu()      
      })           
    } 
  }

  const fecharSeClicouBtnRespons = (alvo:HTMLElement, $btnFecharResponsivo:HTMLElement) => {    

    if(alvo == $btnFecharResponsivo) {    

      $filtroBuscaTagsDetail.forEach(($tagDetail:HTMLElement) => {        
          $tagDetail.removeAttribute('open')   
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

  const exibeBackdropMenu = (alvo:HTMLElement, $detail:HTMLElement, $areaExterna:HTMLElement) => {       
    if (alvo.parentNode == $detail) {
      $areaExterna.classList.remove('hidden')
      removeBackgroundScroll()
    }
  }

  const ocultaBackdropMenu = () => {
    const $backdrop:HTMLElement = document.querySelector('.tail-backdrop-menu')
      
    $backdrop.classList.add('hidden')    
    addBackgroundScroll()    
  }

  const removeBackgroundScroll = () => (document.documentElement.style.overflow = "hidden");

  const addBackgroundScroll = () => (document.documentElement.style.overflow = "inherit");
}

export { menuDetails }

