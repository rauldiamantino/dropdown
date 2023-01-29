const $todasDetails = document.querySelectorAll('details');
document.addEventListener('click', (event) => {
    const $areaExterna = document.querySelector('main');
    const $btnFecharResponsivo = document.querySelector('.btn-fechar-details');
    $todasDetails.forEach(($detail) => {
        const alvo = event.target;
        const $itensDetailClicada = alvo.parentNode.querySelector('.details-itens-menu');
        fecharDemaisDetails(alvo, $detail);
        fecharSeClicouFora(alvo, $areaExterna);
        fecharSeClicouBtnResponsivo(alvo, $btnFecharResponsivo);
        resetarAnimacaoMenuDetails($itensDetailClicada);
    });
});
const fecharDemaisDetails = (alvo, $detail) => {
    if (alvo.parentNode == $detail) {
        $todasDetails.forEach(($detailAtual) => {
            if ($detailAtual !== alvo.parentNode) {
                $detailAtual.removeAttribute('open');
            }
        });
    }
};
const fecharSeClicouFora = (alvo, $areaExterna) => {
    if (alvo == $areaExterna) {
        $todasDetails.forEach(($detail) => {
            $detail.removeAttribute('open');
        });
    }
};
const fecharSeClicouBtnResponsivo = (alvo, $btnFecharResponsivo) => {
    if (alvo.parentNode == $btnFecharResponsivo) {
        $todasDetails.forEach(($detail) => {
            $detail.removeAttribute('open');
        });
    }
};
const resetarAnimacaoMenuDetails = ($itensDetailClicada) => {
    if ($itensDetailClicada) {
        $itensDetailClicada.style.animation = 'none';
        setTimeout(() => $itensDetailClicada.style.animation = "", 5);
    }
};
//# sourceMappingURL=index.js.map