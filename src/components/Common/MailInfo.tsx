import MAIL_ADDRESS from '@/data/MAIL_ADDRESS'


const MailInfo = () => {
    return (
        <section className="mail-info">

            <p className="mail-header">Mail address</p>
            <p className="mail-text">{MAIL_ADDRESS}</p>

        </section>
    )
}


export default MailInfo