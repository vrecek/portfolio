import React from 'react'
import { ProjectText } from '../../interfaces/OneProjectPageInterfaces'
import TextParagraph from './TextParagraph'

const TextInformations = ({header, text}: ProjectText) => {
    return (
        <div className="wrap">

            <h2>{ header }</h2>

            <TextParagraph text={text} />

         </div>
    )
}

export default TextInformations