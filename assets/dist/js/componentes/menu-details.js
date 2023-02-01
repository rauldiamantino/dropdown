const menuDetails = ($filtroBuscaTagsDetail) => {
    document.addEventListener('click', (event) => {
        const $areaExterna = document.querySelector('.tail-backdrop-menu');
        const $btnFecharResponsivo = document.querySelector('.tail-details-btn-fechar');
        $filtroBuscaTagsDetail.forEach(($detail) => {
            const alvo = event.target;
            const $itensDetailClicada = alvo.parentNode.querySelector('.tail-details-itens-menu');
            const $detailAberta = $detail.hasAttribute('open') && alvo.parentNode == $detail;
            exibeBackdropMenu(alvo, $detail, $areaExterna);
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
            $filtroBuscaTagsDetail.forEach(($tagDetail) => {
                const $detailAtual = $tagDetail == alvo.parentNode;
                if (!$detailAtual) {
                    $tagDetail.removeAttribute('open');
                }
            });
        }
    };
    const fecharSeClicouFora = (alvo, $areaExterna) => {
        if (alvo == $areaExterna) {
            $filtroBuscaTagsDetail.forEach(($tagDetail) => {
                $tagDetail.removeAttribute('open');
                ocultaBackdropMenu();
            });
        }
    };
    const fecharSeClicouBtnRespons = (alvo, $btnFecharResponsivo) => {
        if (alvo == $btnFecharResponsivo) {
            $filtroBuscaTagsDetail.forEach(($tagDetail) => {
                $tagDetail.removeAttribute('open');
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
    const exibeBackdropMenu = (alvo, $detail, $areaExterna) => {
        if (alvo.parentNode == $detail) {
            $areaExterna.classList.remove('hidden');
            removeBackgroundScroll();
        }
    };
    const ocultaBackdropMenu = () => {
        const $backdrop = document.querySelector('.tail-backdrop-menu');
        $backdrop.classList.add('hidden');
        addBackgroundScroll();
    };
    const removeBackgroundScroll = () => (document.documentElement.style.overflow = "hidden");
    const addBackgroundScroll = () => (document.documentElement.style.overflow = "inherit");
};
export { menuDetails };
//# sourceMappingURL=menu-details.js.map