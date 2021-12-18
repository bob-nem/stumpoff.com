import Image from 'next/image'
import style from '../../styles/Reasons.module.css'

import Work01 from '../../images/pictures/work01.webp'
import Work02 from '../../images/pictures/work02.webp'

export default function Team() {
    return (
        <>
            <div className={style.RotateStrip}></div>
            <div className={style.Wrapper}>
                <div className={style.Container}>
                    <h2 className={style.Header}>TOP10 REASONS</h2>
                    <p className={style.HeaderDescription}>why you should remove the stumps at your property.</p>
                    <div className={style.FirstRow}>
                        <div className={style.FirstRowLeft}>
                            <ol>
                                <li>Old tree stumps can ruin your landscape look.</li>
                                <li>Stumps can become the perfect home for termites, ants, rodents and even wasps.</li>
                                <li>Having a stump in your yard can make lawn mowing much harder.</li>
                                <li>It’s much better to have a flower bed instead of an ugly stump.</li>
                                <li>Tree roots can become a hidden danger for your house. They damage the foundation of your house.</li>
                            </ol>
                        </div>
                        <div className={style.FirstRowRight}>
                            <Image
                                src={Work01}
                                alt="land before stump gringing"
                            />
                        </div>
                    </div>
                    <div className={style.SecondRow}>
                        <div className={style.SecondRowLeft}>
                            <Image
                                src={Work02}
                                alt="plot before and after stump grinding"
                            />
                        </div>
                        <div className={style.SecondRowRight}>
                            <ol start="6">
                                <li>The tree roots above the ground can become a tripping hazard and an obstacle to moving around them.</li>
                                <li>Stump can occupy your future parking space, and it is also an obstacle in your driveway.</li>
                                <li>Having an old tree stump next to the playground can pose a real danger to your kids of problems.</li>
                                <li>A stump can get in the way of putting up a new fence.</li>
                                <li>Grow a new tree instead of your old stump.</li>
                            </ol>
                        </div>
                        <div className={style.SecondRowLeftMobile}>
                            <Image
                                src={Work02}
                                alt="plot before and after stump grinding"
                            />
                        </div>
                    </div>
                    <div className={style.ThirdRow}>
                        <p>We have experienced all of these, and other problems that you can face. However, we will be happy to help you out and eliminate all these annoying problems. We stump grind quickly, efficiently, and fast.</p>
                    </div>
                </div>
            </div>
        </>
    )
}