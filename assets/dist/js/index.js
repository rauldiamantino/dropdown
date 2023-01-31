const $todasDetails = document.querySelectorAll('details');
document.addEventListener('click', (event) => {
    const $areaExterna = document.querySelector('.tail-backgrop-menu');
    const $btnFecharResponsivo = document.querySelector('.btn-fechar-details');
    $todasDetails.forEach(($detail) => {
        const alvo = event.target;
        const $itensDetailClicada = alvo.parentNode.querySelector('.tail-details-itens-menu');
        const $detailAberta = $detail.hasAttribute('open') && alvo.parentNode == $detail;
        exibeBackdropMenu(alvo, $detail);
        fecharDemaisDetails(alvo, $detail);
        fecharSeClicouFora(alvo, $areaExterna);
        resetarAnimacaoMenuDetails($itensDetailClicada);
        fecharSeClicouBtnRespons(alvo, $btnFecharResponsivo);
        if ($detailAberta) {
            ocultaBackdropMenu();
        }
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
            ocultaBackdropMenu();
        });
    }
};
const fecharSeClicouBtnRespons = (alvo, $btnFecharResponsivo) => {
    if (alvo.parentNode == $btnFecharResponsivo) {
        $todasDetails.forEach(($detail) => {
            $detail.removeAttribute('open');
            ocultaBackdropMenu();
        });
    }
};
const resetarAnimacaoMenuDetails = ($itensDetailClicada) => {
    if ($itensDetailClicada) {
        $itensDetailClicada.style.animation = "none";
        $itensDetailClicada.offsetHeight;
        $itensDetailClicada.style.animation = null;
    }
};
const exibeBackdropMenu = (alvo, $detail) => {
    const $backdrop = document.querySelector('.tail-backgrop-menu');
    if (alvo.parentNode == $detail) {
        $backdrop.classList.remove('hidden');
        removeBackgroundScroll();
    }
};
const ocultaBackdropMenu = () => {
    const $backdrop = document.querySelector('.tail-backgrop-menu');
    $backdrop.classList.add('hidden');
    addBackgroundScroll();
};
const removeBackgroundScroll = () => (document.documentElement.style.overflow = "hidden");
const addBackgroundScroll = () => (document.documentElement.style.overflow = "inherit");
//# sourceMappingURL=index.js.map