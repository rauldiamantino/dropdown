const $btnFechar = document.querySelector('.btn-fechar-details');
const $todosDetails = document.querySelectorAll('details');
const fecharTagDetailsOrdenar = () => {
    const $detailsOrdenar = document.querySelector('.details-menu.ordenar');
    $detailsOrdenar.removeAttribute('open');
};
const fecharDemaisDetails = ($detailClicada) => {
    const $detailsAnimacao = $detailClicada.querySelector('.details-itens-menu');
    $detailClicada.addEventListener('click', (event) => {
        const alvo = (event.target.localName);
        if (alvo == "summary") {
            resetarAnimacaoMenuDetails($detailsAnimacao);
        }
        $todosDetails.forEach(($detail) => {
            if ($detail !== $detailClicada) {
                $detail.removeAttribute('open');
            }
        });
    });
};
const $areaExterna = document.querySelector('main');
$areaExterna.addEventListener('click', () => {
    $todosDetails.forEach(fecharDemaisDetails);
});
const resetarAnimacaoMenuDetails = ($detailsAnimacao) => {
    $detailsAnimacao.style.animation = 'none';
    setTimeout(() => $detailsAnimacao.style.animation = "", 5);
};
$btnFechar.addEventListener('click', () => fecharTagDetailsOrdenar());
$todosDetails.forEach(fecharDemaisDetails);
//# sourceMappingURL=index.js.map