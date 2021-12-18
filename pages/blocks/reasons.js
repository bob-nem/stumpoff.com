import Image from 'next/image'
import style from '../../styles/Team.module.css'

import Work03 from '../../images/pictures/work03.webp'
import Work04 from '../../images/pictures/work04.webp'

export default function Reasons() {
    return (
        <>
            <div className={style.RotateStrip} id="howwework"></div>
            <div className={style.Wrapper}>
                <div className={style.Container}>
                    <h2 className={style.Header}>why you should only hire our team.</h2>
                    <div className={style.FirstRow}>
                        <div className={style.FirstRowLeft}>
                            <ol>
                                <li>Free estimates. Our technician will come to you to give you a free consultation and a free estimate for stump removal.</li>
                                <li>We do not do all kinds of tree stumps: small stumps, big stumps. We specialize in tree stump removal. It is the only work we do.</li>
                                <li>We can fix your schedule. We can come to you from the early morning till late evening all week long.</li>
                                <li><h3><strong>Free estimate.</strong></h3></li>
                                <li>All estimates are unique. The prices for our stump removal will pleasantly surprise you. Our stump removal cost is not just competitive; in 8 out of 10 cases, we provide the most affordable stump-out service.</li>
                                <li>Wide working area. We perform stump grinding in the north of CT, including Hartford County and South of MA states.</li>
                            </ol>
                        </div>
                        <div className={style.FirstRowRight}>
                            <Image
                                src={Work03}
                                alt="land before stump gringing"
                            />
                        </div>
                    </div>
                    <div className={style.SecondRow}>
                        <div className={style.SecondRowLeft}>
                            <Image
                                src={Work04}
                                alt="plot before and after stump grinding"
                            />
                        </div>
                        <div className={style.SecondRowRight}>
                            <ol start="7">                                
                                <li>We will keep your lawn nice and clean after the stump grinding. <h3><strong>Your yard will be ready to reseed.</strong></h3></li>
                                <li>After stump removal, clean-up is not an additional service. It does not affect your final price.</li>
                                <li>KEEP IT SIMPLE. The estimation price is your final price - there are no hidden fees or "extra labor" fees.</li>
                                <li>We only use new professional equipment for tree stump removal.</li>
                                <li>StumpOFF LLC is licensed and insured.</li>
                                <li>We accept all kinds of payments: cash, debit/credit cards, bank checks.</li>
                            </ol>
                        </div>
                        <div className={style.SecondRowLeftMobile}>
                            <Image
                                src={Work04}
                                alt="plot before and after stump grinding"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}