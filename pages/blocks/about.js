import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/About.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Grinder from '../../images/pictures/grinder.webp'

export default function About() {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container} id="about">
                <div className={style.Left}>
                    <h2>ABOUT US</h2>
                    <p>StumpOFF LLC is a local professional stump grinding company located in Windsor, CT.</p>
                    <h3><strong>StumpOFF LLC specializes in tree stump grinding.</strong></h3>
                    <p style={{ marginTop: 0 }}><strong>StumpOFF LLC guarantees a careful, clean, and professional job</strong></p>
                    <p><strong>What is a Stump Grinder?</strong></p>
                    <p style={{ marginTop: 0 }}>StumpOFF LLC cares about our reputation. We know how to satisfy the request of even the most demanding client. The best evidence of StumpOFF LLC's involvement in the stump removal business comes from over a hundred five-star reviews on Google and Facebook. Also, the HomeAdvisor platform recognized StumpOFF LLC Stump Grinding as "Best HomeAdvisor 2021" and "Top Rated HomeAdvisor local provider."</p>
                    <AnchorLink href='#feedback'>
                        <p className={style.FeedbackLink}>&#8618; See your review</p>
                    </AnchorLink>
                    <div className={style.GetQuoteMobile}>
                        <AnchorLink href='#getaquote'>
                            <button className={style.Button}>Get a quote</button>
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
                    <button className={style.Button}>Get a quote</button>
                </AnchorLink>
            </div>
        </div>
    )
}