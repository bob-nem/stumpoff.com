import Image from 'next/image'
import style from '../../styles/Feedback.module.css'

import HaBadges from '../../images/icons/HomeAdvisor-badges.webp'

export default function Feedback() {
    return (
        <div className={style.Container} id="feedback">
            <h2 className={style.Header}>Feedback</h2>
            <div style={{ marginTop: "-2rem" }}>
                <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                <div className="elfsight-app-c339270f-8089-4944-a9ea-a1a142d26d8b"></div>
            </div>
            <div className={style.Badges}>
                <Image
                    src={HaBadges}
                    alt="HomeAdvisor badges"
                />
            </div>
        </div>
    )
}