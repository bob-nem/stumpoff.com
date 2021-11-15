import Image from 'next/image'
import style from '../../styles/Getaquote.module.css'

import ContactForm from './contact-form'

import Work05 from '../../images/pictures/work05.jpg'
import Work06 from '../../images/pictures/work06.jpg'

export default function GetaQuote() {
    return (
        <div className={style.Wrapper} id="getaquote">
            <div className={style.Container}>
                <div className={style.Photos}>
                    <Image
                        src={Work05}
                        alt="stumoff truck after stum grinding"
                    />
                    <Image
                        src={Work06}
                        alt="good looking place after grinding stump"
                    />
                </div>
                <div className={style.ContactForm}>
                    <h2 className={style.Header}>Get a quote</h2>
                    <p style={{ paddingBottom: "1em" }}>Save time by filling out a quote request online.</p>
                    <p>In order to receive a quote please take a picture of your stump with its exact size including diameter and height.</p>
                    <div className={style.PhotosMobile}>
                        <Image
                            src={Work05}
                            alt="stumoff truck after stum grinding"
                        />
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}