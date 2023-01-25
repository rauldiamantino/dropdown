/* ---- constantes ---- */
const $btnFechar = document.querySelector('.btn-fechar-details')
const $todosDetails = document.querySelectorAll('details')

/* ---- funções ---- */

// fecha detail Ordenar através do botão no responsivo
const fecharTagDetailsOrdenar = () => {
  const $detailsOrdenar = document.querySelector('.details-menu.ordenar')

  $detailsOrdenar.removeAttribute('open')
}

// fecha demais details ao clicar em uma
const fecharDemaisDetails = ($detailClicada) => {
  const $detailsAnimacao = $detailClicada.querySelector('.details-itens-menu')

  $detailClicada.addEventListener('click', (e) => {
      
    if(e.target.localName == "summary"){
      resetarAnimacaoMenuDetails($detailsAnimacao)
    }

    $todosDetails.forEach($detail => {
      if ($detail !== $detailClicada) {
        $detail.removeAttribute('open')
      }
    })
  })
}

const resetarAnimacaoMenuDetails = ($detailsAnimacao) => {
  $detailsAnimacao.style.animation = 'none';
  setTimeout(() => $detailsAnimacao.style.animation = "", 5);
}

// Chamando as funções
$btnFechar.addEventListener('click', () => fecharTagDetailsOrdenar())
$todosDetails.forEach(fecharDemaisDetails)