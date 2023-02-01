import { menuDetails } from './componentes/menu-details.js';
import {
  salvarCheckboxNoLocalStorage,
  recuperarCheckboxLocalStorage,
  salvarRadioNoLocalStorage 
} from './componentes/menu-details-inputs.js';

const $filtroBuscaTagsDetail:NodeList = document.querySelectorAll('details')
const $inputsCheckbox:NodeList = document.querySelectorAll('.tail-details-menu input[type=checkbox]')
const $inputsRadio:NodeList = document.querySelectorAll('.tail-details-menu input[name=ordenar]')

menuDetails($filtroBuscaTagsDetail)

const recuperarRadioLocalStorage = ($input:HTMLInputElement) => {
  const input:string = localStorage.getItem($input.name)

  input == $input.id ? $input.checked = true : $input.checked = false
}


$inputsRadio.forEach(($input:HTMLInputElement) => {
  salvarRadioNoLocalStorage($input)
  recuperarRadioLocalStorage($input)
})

$inputsCheckbox.forEach(($input:HTMLInputElement) => {
  salvarCheckboxNoLocalStorage($input)
  recuperarCheckboxLocalStorage($input)
})



