import { menuDetails } from './componentes/menu-details.js';
import { manipularCheckboxLocalStorage } from './componentes/menu-details-inputs.js';
const $filtroBuscaTagsDetail = document.querySelectorAll('details');
const $inputsCheckbox = document.querySelectorAll('.tail-details-menu input[type=checkbox]');
const $inputsRadio = document.querySelectorAll('.tail-details-menu input[name=ordenar]');
menuDetails($filtroBuscaTagsDetail);
manipularCheckboxLocalStorage($inputsCheckbox, $inputsRadio);
//# sourceMappingURL=index.js.map