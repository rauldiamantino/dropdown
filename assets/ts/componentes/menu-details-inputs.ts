const manipularCheckboxLocalStorage = ($inputsCheckbox:NodeList, $inputsRadio:NodeList) => {
  
  // funções
  const salvarCheckboxNoLocalStorage = ($input:HTMLInputElement) => {
    $input.addEventListener('click', () => {
      $input.checked == true ? localStorage.setItem($input.id, 'true') : localStorage.setItem($input.id, "false")
      window.location.reload()
    })
  }
  
  const recuperarCheckboxLocalStorage = ($input:HTMLInputElement) => {
    const input:string = localStorage.getItem($input.id)
  
    input == "true" ? $input.checked = true : $input.checked = false
  }
  

  const salvarRadioNoLocalStorage = ($input:HTMLInputElement) => {
    $input.addEventListener('click', () => {    
      if ($input.checked == true) {
        localStorage.clear
        localStorage.setItem($input.name, $input.id)
      }          
      window.location.reload()
    })
  }
  
  const recuperarRadioLocalStorage = ($input:HTMLInputElement) => {
    const input:string = localStorage.getItem($input.name)
  
    input == $input.id ? $input.checked = true : $input.checked = false
  }


  // chamando funções
  $inputsRadio.forEach(($input:HTMLInputElement) => {
    salvarRadioNoLocalStorage($input)
    recuperarRadioLocalStorage($input)
  })
  
  $inputsCheckbox.forEach(($input:HTMLInputElement) => {
    salvarCheckboxNoLocalStorage($input)
    recuperarCheckboxLocalStorage($input)
  })
}

export { manipularCheckboxLocalStorage }