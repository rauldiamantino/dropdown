import { menuDetails } from './componentes/menu-details.js';
import { salvarCheckboxNoLocalStorage, recuperarCheckboxLocalStorage, salvarRadioNoLocalStorage } from './componentes/menu-details-inputs.js';
const $filtroBuscaTagsDetail = document.querySelectorAll('details');
const $inputsCheckbox = document.querySelectorAll('.tail-details-menu input[type=checkbox]');
const $inputsRadio = document.querySelectorAll('.tail-details-menu input[name=ordenar]');
menuDetails($filtroBuscaTagsDetail);
const recuperarRadioLocalStorage = ($input) => {
    const input = localStorage.getItem($input.name);
    input == $input.id ? $input.checked = true : $input.checked = false;
};
$inputsRadio.forEach(($input) => {
    salvarRadioNoLocalStorage($input);
    recuperarRadioLocalStorage($input);
});
$inputsCheckbox.forEach(($input) => {
    salvarCheckboxNoLocalStorage($input);
    recuperarCheckboxLocalStorage($input);
});
//# sourceMappingURL=index.js.map