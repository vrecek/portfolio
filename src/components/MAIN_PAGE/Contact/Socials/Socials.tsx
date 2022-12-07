import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Socials = () => {
    const openWindow = (): Window | null => window.open('https://github.com/vrecek', '_blank')

    const mailHandle = (e: React.MouseEvent): void => {
        window.navigator.clipboard.writeText('vrecek-ffci@outlook.com')

        const t: HTMLElement = e.target as HTMLElement,
              svg: HTMLElement = t.children[0] as HTMLElement


        svg.style.scale = '.6'
        setTimeout(() => svg.style.scale = '1', 300)
    }

    return (
        <section className="socials">

            <span onClick={openWindow}><FaGithubSquare /></span>
            <span onClick={mailHandle}><IoMdMail /></span>

        </section>
    )
}

export default Socials