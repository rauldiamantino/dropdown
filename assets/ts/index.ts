/* ---- constantes ---- */
const $btnFechar:any = document.querySelector('.btn-fechar-details')
const $todosDetails:NodeList = document.querySelectorAll('details')

/* ---- funções ---- */

// fecha detail Ordenar através do botão no responsivo
const fecharTagDetailsOrdenar = () => {
  const $detailsOrdenar:any = document.querySelector('.details-menu.ordenar')  

  $detailsOrdenar.removeAttribute('open')
}

// fecha demais details ao clicar em uma
const fecharDemaisDetails = ($detailClicada:any) => {
  const $detailsAnimacao:any = $detailClicada.querySelector('.details-itens-menu')  

  $detailClicada.addEventListener('click', (e:any) => {
    
      
    if(e.target.localName == "summary"){
      resetarAnimacaoMenuDetails($detailsAnimacao)
    }

    $todosDetails.forEach(($detail:any) =>  {
      if ($detail !== $detailClicada) {
        $detail.removeAttribute('open')        
      }
    })
  })
}

const resetarAnimacaoMenuDetails = ($detailsAnimacao:HTMLElement) => {
  $detailsAnimacao.style.animation = 'none';
  setTimeout(() => $detailsAnimacao.style.animation = "", 5);
}

// Chamando as funções
$btnFechar.addEventListener('click', () => fecharTagDetailsOrdenar())
$todosDetails.forEach(fecharDemaisDetails)