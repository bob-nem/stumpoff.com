import Image from 'next/image'
import style from '../../styles/Cost.module.css'

import ShinyStump from '../../images/pictures/stump.webp'

export default function Coast() {
    return (
        <>
            <svg className={style.SvgTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff9045" fillOpacity="1" d="M0,256L120,213.3C240,171,480,85,720,80C960,75,1200,149,1320,186.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <div className={style.Wrapper} id="cost">
                <div className={style.Container}>
                    <h2 className={style.Header}>Tree Stump Removal Cost</h2>
                    <div className={style.BackGround}>
                        <p>All projects are unique. We provide a competitive price for stump grinding, while at the same time you receive a full range of services. For example - cleaning of wood chips is always included in our work.</p><br />
                        <p>It is almost impossible to estimate a project without visiting your yard. There are different types of trees with varying kinds of root systems. It so happens that the visual stump is not very large, but one inch under the layer of ground, and the root structure of the stump is enormous. All these nuances must be taken into account when submitting a commercial offer to remove stumps.</p><br />
                        <p>Another point that may affect the cost of services is whether to dispose of wood chips, which will remain after removing the stump. For this reason, we are very responsible for the pricing policy.</p><br />
                        <p>Before each work, a specialist of our company comes to your address and estimates the cost of work on removing a tree stump. StumpOFF does not have any hidden fees. You will immediately know and understand how much you should expect.</p>
                    </div>
                    <div className={style.ShinyStump}>
                    </div>
                </div>
            </div>
            <svg className={style.SvgBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260"><path fill="#d2e7f9" fillOpacity="1" d="M0,160L120,181.3C240,203,480,245,720,234.7C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </>
    )
}