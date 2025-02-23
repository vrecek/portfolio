import { ProjectText } from '../../interfaces/OneProjectPageInterfaces'
import TextParagraph from './TextParagraph'


const TextInformations = ({header, text}: ProjectText) => {
    return (
        <div className="wrap">

            <p className='header'>{header}</p>

            <TextParagraph text={text} />

        </div>
    )
}


export default TextInformations