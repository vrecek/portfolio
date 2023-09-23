import React from 'react'

const TextParagraph = ({text}: {text: string | JSX.Element}) => {
    const paragraphRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const c: HTMLElement | null = paragraphRef?.current

        if(!c || typeof text !== 'string') return

        const start: number[] = Array.from(text.matchAll(/\[\[/g)).map(x => x.index!),
              end: number[] = Array.from(text.matchAll(/\]\]/g)).map(x => x.index!)


        if(
            start.length <= 0 ||
            (start.length !== end.length)
        ) {
            c.innerHTML = text

            return
        }


        let textCopy: string = text

        for(let i = 0; i < start.length; i++) {
            const src: string = text.slice(start[i] + 2, end[i]),
                  figure = `<figure><img src='${src}' alt='Image' /></figure>`

                  
            textCopy = textCopy.replace(`[[${src}`, figure)
                               .replace(']]', '')
        }

        c.innerHTML = textCopy

    }, [])

    return (
        typeof text === 'string'
                ? <p ref={paragraphRef}></p>
                : text
    )
}

export default TextParagraph