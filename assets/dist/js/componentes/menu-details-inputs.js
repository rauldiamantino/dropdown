const manipularCheckboxLocalStorage = ($inputsCheckbox, $inputsRadio) => {
    const salvarCheckboxNoLocalStorage = ($input) => {
        $input.addEventListener('click', () => {
            $input.checked == true ? localStorage.setItem($input.id, 'true') : localStorage.setItem($input.id, "false");
            window.location.reload();
        });
    };
    const recuperarCheckboxLocalStorage = ($input) => {
        const input = localStorage.getItem($input.id);
        input == "true" ? $input.checked = true : $input.checked = false;
    };
    const salvarRadioNoLocalStorage = ($input) => {
        $input.addEventListener('click', () => {
            if ($input.checked == true) {
                localStorage.clear;
                localStorage.setItem($input.name, $input.id);
            }
            window.location.reload();
        });
    };
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
};
export { manipularCheckboxLocalStorage };
//# sourceMappingURL=menu-details-inputs.js.map