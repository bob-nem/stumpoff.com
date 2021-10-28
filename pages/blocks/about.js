import Image from 'next/image'
import style from '../../styles/About.module.css'

import Grinder from '../../images/backgrounds/grinder.webp'

export default function About () {
    return (
        <>
            <div className={style.Container}>
                <div className={style.Left}>
                    <h2>ABOUT US</h2>
                    <p>We are professionals who are ready to quickly and completely remove tree stumps. Our team uses professional stump grinding equipment to efficiently remove and grind your tree stump. We guarantee careful and safely professional job.</p>
                    <p><strong>What is a Stump Grinder?</strong></p>
                    <p>A stump grinder is a designated specialist piece of machinery that specifically removes tree stumps. Built on a wheeled or tracked chassis they come in different engine sizes and power.</p>
                    <p style={{ paddingBottom: '1rem' }}>We provide the LOWEST prices for service in Connecticut.</p>
                </div>
                <div className={style.Right}>
                    <div className={style.Image}>
                        <Image
                            src={Grinder}
                            alt="work with stump grinder" />
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '3rem 0'}}>
                <button className={style.Button}>Get a quote</button>
            </div>
            <div className={style.RotateStrip}>

            </div>
        </>
    )
}