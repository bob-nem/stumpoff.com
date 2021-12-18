import Image from 'next/image'
import style from '../../styles/Getaquote.module.css'

import ContactForm from './contact-form'

import Work05 from '../../images/pictures/work05.webp'
import Work06 from '../../images/pictures/work06.webp'

export default function GetaQuote() {
    return (
        <div className={style.Wrapper} id="getaquote">
            <div className={style.Container}>
                <div className={style.Photos}>
                    <div className={style.PhotosImg}>
                        <Image
                            src={Work05}
                            alt="stumoff truck after stum grinding"
                        />
                    </div>
                    <div className={style.PhotosImg}>
                        <Image
                            src={Work06}
                            alt="good looking place after grinding stump"
                        />
                    </div>
                </div>
                <div className={style.ContactForm}>
                    <h2 className={style.Header}>Get a quote</h2>
                    <p style={{ paddingBottom: "1em" }}>Stump grinding cost quote request</p>
                    <p>All our quotes are in person. StumpOff technicians will come and make a unique estimate.</p>
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