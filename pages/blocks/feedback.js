import Image from 'next/image'
import style from '../../styles/Feedback.module.css'

import HaBadges from '../../images/icons/HomeAdvisor-badges.webp'

export default function Feedback () {
    return (
        <div className={style.Container} id="feedback">
            <h2 className={style.Header}>Feedback</h2>
            <div style={{height: "40vh"}}></div>
            <div className={style.Badges}>
                <Image
                    src={HaBadges}
                    alt="HomeAdvisor badges"
                />
            </div>
        </div>
    )
}