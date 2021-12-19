import Image from 'next/image'
import style from '../../styles/Cost.module.css'

import ShinyStump from '../../images/pictures/stump.webp'

export default function Coast() {
    return (
        <>
            <div className={style.RotateStrip}></div>
            <div className={style.Wrapper} id="cost">
                <div className={style.Container}>
                    <h2 className={style.Header}>Tree Stump Removal Cost</h2>
                    <div className={style.BackGround}>
                        <p>All projects are unique. We provide a competitive price for stump grinding, while at the same time you receive a full range of services. For example - cleaning of wood chips is always included in our work.</p><br />
                        <p>It is almost impossible to estimate a project without visiting your yard. There are different types of trees with varying kinds of root systems. It so happens that the visual stump is not very large, but one inch under the layer of ground, and the root structure of the stump is enormous. All these nuances must be taken into account when submitting a commercial offer to remove stumps.</p><br />
                        <p>Another point that may affect the cost of services is whether to dispose of wood chips, which will remain after removing the stump. For this reason, we are very responsible for the pricing policy.</p><br />
                        <p>Before each work, a specialist of our company comes to your address and estimates the cost of work on removing a tree stump. StumpOFF does not have any hidden fees. You will immediately know and understand how much you should expect.</p>
                    </div>                    
                </div>
            </div>
        </>
    )
}