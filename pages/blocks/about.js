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
                    <p>StumpOFF LLC is a local professional stump grinding company specializing in tree stump grinding in Connecticut. We guarantee a careful, clean, and professional job.</p>
                    <p>StumpOFF LLC cares about our reputation. We know how to satisfy the request of even the most demanding client. The best evidence of StumpOFF LLC&apos;s involvement in the stump removal business comes from over a hundred five-star reviews on Google and Facebook. Also, the HomeAdvisor platform recognized StumpOFF LLC Stump Grinding as &quot;Best HomeAdvisor 2021&quot; and &quot;Top Rated HomeAdvisor local provider.&quot;</p>
                    <AnchorLink href='#reviews'>
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