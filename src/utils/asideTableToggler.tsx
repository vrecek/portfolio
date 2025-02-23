const toggleTable = (arrowicon: HTMLElement) => {
    const menu:     HTMLElement = arrowicon.parentElement! as HTMLElement,
          arrowsvg: HTMLElement = arrowicon.children[0] as HTMLElement

    menu.classList.toggle('active')

    if (menu.classList.contains('active'))
    {
        menu.style.translate = '0 -50%'
        arrowsvg.style.transform = 'rotate(180deg)'

        return
    }

    menu.style.translate = '-100% -50%'
    arrowsvg.style.transform = 'rotate(0)'
}


export default toggleTable