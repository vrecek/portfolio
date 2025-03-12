const filterInputOnChange = (input: HTMLInputElement, val: string): void => {
    input.className = ''
    input.value     = val
    
    input.setAttribute('data-select', val)
}


export default filterInputOnChange