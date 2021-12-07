import Image from 'next/image'
import style from '../../styles/Team.module.css'

import Work03 from '../../images/pictures/work03.webp'
import Work04 from '../../images/pictures/work04.webp'

export default function Team () {
    return (
        <>
            <div className={style.RotateStrip}></div>
            <div className={style.Wrapper}>
                <div className={style.Container}>
                    <h2 className={style.Header}>why you should only hire our team.</h2>
                    <div className={style.FirstRow}>
                        <div className={style.FirstRowLeft}>
                            <ol>
                                <li>We do not do all kinds of tree service; we exclusively perform stump removal. It is the only work we do. This is why we are the best at it. We focus on being productive instead of busy!</li>
                                <li>Our customer service has a very flexible schedule which makes us available from the early morning till late in the night all week long. We will ALWAYS find time for you.</li>
                                <li>Free estimate.</li>
                                <li>We perform our work in CT and MA areas.</li>
                                <li>We will keep your lawn nice and clean after the stump grinding.</li>
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
                            <ol start="6">
                                <li>It is our rule to have our workplace cleaned up after we are done. It does not affect the price of our service.</li>
                                <li>We can paper bag the wood chips or we can also take the bags for disposal.</li>
                                <li>We only use new and professional equipment to get rid of stumps in hard-to-reach places without raising price for this.</li>
                                <li>We are licensed and insured.</li>
                                <li>We accept all kinds of payment: cash, cards, checks.</li>
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