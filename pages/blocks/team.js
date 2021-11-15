import Image from 'next/image'
import style from '../../styles/Team.module.css'

import Work03 from '../../images/pictures/work03.jpg'
import Work04 from '../../images/pictures/work04.jpg'

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
                                <li>Old tree stumps can ruin your landscape look.</li>
                                <li>Stumps can become the perfect home for termites, ants, rodents and even wasps.</li>
                                <li>Having a stump at your yard can make mowing much harder to perform.</li>
                                <li>Instead of occupying property&apos;s space with an ugly and rotten stump you could plant some flowers, bushes or have a nice lawn. </li>
                                <li>Tree roots can become a hidden danger for your house. They damage the underground structure of your residence.</li>
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
                                <li>The tree roots which are above the ground can become a tripping hazard and an obstacle to move around them.</li>
                                <li>Stump can occupy your future parking space and it is also an obstacle at your driveway.</li>
                                <li>Having an old tree stump next to the playground can pose a real danger to your kids of problem.</li>
                                <li>Stump can get in the way of putting up a new fence.</li>
                                <li>Stumps may be the reasons for new trees to grow.</li>
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