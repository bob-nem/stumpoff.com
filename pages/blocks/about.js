import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/About.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Grinder from '../../images/pictures/grinder.webp'

export default function About() {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.Left}>
                    <h2>ABOUT US</h2>
                    <p>We are professionals who are ready to quickly and completely remove tree stumps. Our team uses professional stump grinding equipment to efficiently remove and grind your tree stump. We guarantee careful and safely professional job.</p>
                    <p><strong>What is a Stump Grinder?</strong></p>
                    <p>A stump grinder is a designated specialist piece of machinery that specifically removes tree stumps. Built on a wheeled or tracked chassis they come in different engine sizes and power.</p>
                    <p style={{ paddingBottom: '1rem' }}>We provide the LOWEST prices for service in Connecticut.</p>
                    <div className={style.GetQuoteMobile}>
                        <AnchorLink href='#getaquote'>
                            <a><button className={style.Button}>Get a quote</button></a>
                        </AnchorLink>
                    </div>
                </div>
                <div className={style.Right}>
                    <div className={style.Image}>
                        <Image
                            src={Grinder}
                            alt="work with stump grinder" />
                    </div>
                </div>
            </div>
            <div className={style.GetQuote}>
                <AnchorLink href='#getaquote'>
                    <a><button className={style.Button}>Get a quote</button></a>
                </AnchorLink>
            </div>
        </div>
    )
}