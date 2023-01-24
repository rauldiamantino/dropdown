/* ---- constantes ---- */
const $btnFechar = document.querySelector('.btn-fechar-details')
const $todosDetails = document.querySelectorAll('details')

/* ---- funções ---- */

// fecha detail Ordenar através do botão no responsivo
const fecharTagDetailsOrdenar = () => {
  const detailsOrdenar = document.querySelector('.ordenar')

  detailsOrdenar.removeAttribute('open')
}

// fecha demais details ao clicar em uma
const fecharDemaisDetails = ($detailClicada) => {
  $detailClicada.addEventListener('click', () => {
    $todosDetails.forEach($detail => {
      if ($detail !== $detailClicada) {
        $detail.removeAttribute('open')
      }
    })
  })
}

// fecha detail ao clicar em qualquer lugar da tela - exceto responsivo
const fecharDetailClicouFora = (e) => {
  const alvo = e.srcElement.nodeName == "SUMMARY"   

  $todosDetails.forEach($detail => {
    if ($detail !== alvo) {
      $detail.removeAttribute('open')
    }
  })

}



// Chamando as funções
$btnFechar.addEventListener('click', () => fecharTagDetailsOrdenar())
$todosDetails.forEach(fecharDemaisDetails)
document.addEventListener('click', (e) => { fecharDetailClicouFora(e) })

