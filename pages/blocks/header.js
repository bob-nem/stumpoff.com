import Image from 'next/image'
import style from '../../styles/Header.module.css'

import OurProjects from '../../images/icons/ourProjects.svg'
import StumpOffLogo from '../../images/icons/stumpOffLogoMin.webp'
import Phone from '../../images/icons/phone.svg'

export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.label}>
                <div className={style.Hover} style={{width: '7.5rem'}}> 
                    <Image 
                        src={OurProjects}
                        alt="our projects link icon"
                    />
                </div>
                <div>
                    <Image
                        src={StumpOffLogo}
                        alt="Stumpoff company logotype"
                    />
                </div>
                <div className={style.Hover} style={{display: "inline-flex", alignItems: "center"}}>
                    <Image
                        src={Phone}
                        alt="phone icon"
                    />
                    <a href="tel:+18606907268"><p style={{fontSize: "1.5rem", fontWeight: "500", paddingLeft: "1rem"}}>(860) 690 72 68</p></a>
                </div>
            </div>
            <h1 className={style.Header}>TREE STUMP<br /> GRINDING</h1>
            <p className={style.HeaderDescription}><strong>We are professionals who are ready to<br /> quickly and completely remove tree stumps</strong></p>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
                <button className={style.Button}>Contact us</button>
            </div>
        </div>
    )
}