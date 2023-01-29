const $btnFechar = document.querySelector('.btn-fechar-details');
const $todosDetails = document.querySelectorAll('details');
const fecharTagDetailsOrdenar = () => {
    const $detailsOrdenar = document.querySelector('.details-menu.ordenar');
    $detailsOrdenar.removeAttribute('open');
};
const fecharDemaisDetails = ($detailClicada) => {
    const $detailsAnimacao = $detailClicada.querySelector('.details-itens-menu');
    console.log($detailsAnimacao);
    $detailClicada.addEventListener('click', (e) => {
        const alvo = (e.target.localName);
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
const resetarAnimacaoMenuDetails = ($detailsAnimacao) => {
    $detailsAnimacao.style.animation = 'none';
    setTimeout(() => $detailsAnimacao.style.animation = "", 5);
};
$btnFechar.addEventListener('click', () => fecharTagDetailsOrdenar());
$todosDetails.forEach(fecharDemaisDetails);
//# sourceMappingURL=index.js.map