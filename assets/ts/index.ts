import { menuDetails } from './componentes/menu-details.js';
import { manipularCheckboxLocalStorage } from './componentes/menu-details-inputs.js';

const $filtroBuscaTagsDetail:NodeList = document.querySelectorAll('details')
const $inputsCheckbox:NodeList = document.querySelectorAll('.tail-details-menu input[type=checkbox]')
const $inputsRadio:NodeList = document.querySelectorAll('.tail-details-menu input[name=ordenar]')

menuDetails($filtroBuscaTagsDetail)
manipularCheckboxLocalStorage($inputsCheckbox, $inputsRadio)




