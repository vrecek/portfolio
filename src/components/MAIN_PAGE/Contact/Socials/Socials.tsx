import Icon from '@/components/Common/Icon'
import MAIL_ADDRESS from '@/data/MAIL_ADDRESS'
import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'


const Socials = () => {
    const openWindow = (): Window | null => window.open('https://github.com/vrecek', '_blank')

    const mailHandle = (e: React.MouseEvent): void => {
        window.navigator.clipboard.writeText(MAIL_ADDRESS)

        const t:   HTMLElement = e.currentTarget as HTMLElement

        t.style.scale = '.75'
        setTimeout(() => t.style.scale = '1', 300)
    }


    return (
        <section className="socials">

            <Icon clickfn={openWindow} icon={<FaGithubSquare />} />
            <Icon clickfn={mailHandle} icon={<ImMail />} />

        </section>
    )
}


export default Socials