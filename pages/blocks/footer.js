import Image from 'next/image'
import style from '../../styles/Footer.module.css'

import StumpOffLogo from '../../images/icons/footerLogo.webp'

export default function Footer() {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.Logo}>
                    <Image
                        src={StumpOffLogo}
                        alt="Stumpoff logotype"
                    />
                </div>
                <div className={style.Links}>
                    <a href="/#home">About</a>
                    <a href="/#howwework">How we work</a>
                    <a href="/#gallery">Gallery</a>
                    <a href="/#getaquote">Get a quote</a>
                    <a href="/#contact">Contact</a>
                </div>
                <div className={style.Contacts}>
                    <p style={{ paddingBottom: "4rem" }}>39 Sinclair St, <br />Windsor, CT 06095</p>
                    <a href="mailto:info@stumpoff.com">info@stumpoff.com (free estimate)</a>
                    <a href="tel:+18606907268">(860) 690 72 68</a>
                </div>
                <div className={style.MailForm}>
                    <form>
                        <input
                            type="text"
                            name="email"
                            placeholder="E-mail"
                        />
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                            <button className={style.Button}>Get a quote today</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={style.UnderFooter}>
                <p style={{ color: "white", marginTop: "3rem" }}>© Copyright 2019&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Development by <a href="https://it.for-all.world" className={style.UnderFooterLink}>IT_Department</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Powered by <a href="https://reactjs.org" className={style.UnderFooterLink}>React</a> with <a href="https://nextjs.org" className={style.UnderFooterLink}>NextJS</a></p>
            </div>
        </div>
    )
}