// botão fechar
const $btnFechar = document.querySelector('.btn-fechar-details')


// funções

const fecharTagDetailsOrdenar = () => {
  const detailsOrdenar = document.querySelector('.ordenar')

  detailsOrdenar.removeAttribute('open')
}

$btnFechar.addEventListener('click', () => fecharTagDetailsOrdenar())