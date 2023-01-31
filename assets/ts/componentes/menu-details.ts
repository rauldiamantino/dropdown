export const menuDetails = ($filtroBuscaTagsDetail:NodeList) => {
  // const $filtroBuscaTagsDetail:NodeList = document.querySelectorAll('details')

  document.addEventListener('click', (event:any) => {
    const $areaExterna:HTMLElement = document.querySelector('.tail-backgrop-menu')      
    const $btnFecharResponsivo:HTMLElement = document.querySelector('.btn-fechar-details')

    $filtroBuscaTagsDetail.forEach(($detail:HTMLElement) => {
      const alvo:HTMLElement = event.target    
      const $itensDetailClicada:HTMLElement = alvo.parentNode.querySelector('.tail-details-itens-menu')
      const $detailAberta:boolean = $detail.hasAttribute('open') && alvo.parentNode == $detail
      const $inputsDetail:NodeList = $detail.querySelectorAll('input')

      if($detailAberta) {
        ocultaBackdropMenu()
      }      

      exibeBackdropMenu(alvo, $detail)   
      fecharDemaisDetails(alvo, $detail)
      fecharSeClicouFora(alvo, $areaExterna)
      resetarAnimacaoMenuDetails($itensDetailClicada)
      fecharSeClicouBtnRespons(alvo, $btnFecharResponsivo)
      // recarregarPaginaSelecionarInput($inputsDetail)      
    })
  })

  // funções
  const fecharDemaisDetails = (alvo:HTMLElement, $detail:HTMLElement) => {  
    if(alvo.parentNode == $detail) {
      $filtroBuscaTagsDetail.forEach(($detailAtual:HTMLElement) => {
        if ($detailAtual !== alvo.parentNode) {
          $detailAtual.removeAttribute('open')        
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

  const recarregarPaginaSelecionarInput = ($inputsDetail:NodeList) => {
    $inputsDetail.forEach(($input:HTMLInputElement) => {
      $input.addEventListener('click', () => {
        window.location.reload()
      })
    })
  }
}

