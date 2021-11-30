import Image from 'next/image'
import Link from 'next/link'
import style from '../../styles/Header.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import StumpOffLogo from '../../images/icons/stumpOffLogoMin.webp'
import OurProjects from '../../images/icons/OurProjects'
import Phone from '../../images/icons/Phone'

export default function Header() {
    return (
        <div className={style.container} id="home">
            <div className={style.label}>
                <div className={style.OurProjects} style={{ width: '7.5rem' }}>
                    <Link href="/our-projects">
                        <a title="our projects">
                            <OurProjects />
                        </a>
                    </Link>
                </div>
                <div>
                    <Image
                        src={StumpOffLogo}
                        alt="Stumpoff company logotype"
                    />
                </div>
                <div className={style.Phone} style={{ display: "inline-flex", alignItems: "center" }}>
                    <Phone />
                    <a href="tel:+18606907268"><p style={{ fontSize: "1.5rem", fontWeight: "500", paddingLeft: "1rem" }}><span>(860) 690 72 68</span></p></a>
                </div>
                <div className={style.OurProjectsMobile}>
                    <Link href="/our-projects">
                        <a title="our projects">
                            <OurProjects style={{height: "42px"}} />
                        </a>
                    </Link>
                </div>
            </div>
            <h1 className={style.Header}>TREE STUMP<br /> GRINDING</h1>
            <p className={style.HeaderDescription}><strong>We are professionals who are ready to<br /> quickly and completely remove tree stumps</strong></p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                <AnchorLink href='#contact'>
                    <a><button className={style.Button}>Contact us</button></a>
                </AnchorLink>
            </div>
        </div>
    )
}