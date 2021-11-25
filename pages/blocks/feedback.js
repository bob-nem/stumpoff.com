import Image from 'next/image'
import Link from 'next/link'
import style from '../../styles/Feedback.module.css'

import HaBadges from '../../images/icons/HomeAdvisor-badges.webp'
import Gstarts from '../../images/icons/fifeStars.webp'
import Gicon from '../../images/icons/google.png'

export default function Feedback() {
    return (
        <div className={style.Container} id="feedback">
            <h2 className={style.Header}>Feedback</h2>
            <p>What our customers says in socials</p>
            <div className={style.ReviewList} >
                <div className={style.Review}>
                    <div className={style.ReviewHeader}>
                        <div style={{flex: "1 1 auto"}}><Image src={Gstarts} alt="fife stars review icon" /><span style={{ color: "#074578", paddingLeft: "1em" }}>5 out of 5 stars</span></div>
                        <div><Image src={Gicon} alt="google icon" /></div>
                    </div>
                    <div className={style.ReviewText}>
                        <h3><b>Courtney Canfijn</b></h3>
                        <p>Great job and super affordable. Nick gave us a more than fair price and did a great job grinding out the stump of a maple we had taken down last year. He even leveled out the space around the stump. I wish I could post a pic of the before, but trust me when I say this pic is 100% better than what our lawn looked like with the stump</p>
                    </div>
                    <a href="https://goo.gl/maps/rhwBFMunT3PCq5G99" target="_blank" rel="noreferrer">Read more</a>
                </div>
                <div className={style.Review}>
                    <div className={style.ReviewHeader}>
                        <div style={{flex: "1 1 auto"}}><Image src={Gstarts} alt="fife stars review icon" /><span style={{ color: "#074578", paddingLeft: "1em" }}>5 out of 5 stars</span></div>
                        <div><Image src={Gicon} alt="google icon" /></div>
                    </div>
                    <div className={style.ReviewText}>
                        <h3><b>Cayla French</b></h3>
                        <p>Nick was awesome. Answered in a timely manner. A very reasonable price and did an amazing job. Got quotes from many companies and very happy with my decision. Will use them again if needed!!</p>
                    </div>
                    <a href="https://goo.gl/maps/ixbLEVCS3vv9DBu78" target="_blank" rel="noreferrer">Read more</a>
                </div>
                <div className={style.Review}>
                    <div className={style.ReviewHeader}>
                        <div style={{flex: "1 1 auto"}}><Image src={Gstarts} alt="fife stars review icon" /><span style={{ color: "#074578", paddingLeft: "1em" }}>5 out of 5 stars</span></div>
                        <div><Image src={Gicon} alt="google icon" /></div>
                    </div>
                    <div className={style.ReviewText}>
                        <h3><b>Tim Costello</b></h3>
                        <p>Nick was wonderful to work with. He did an excellent job removing multiple stumps, removing the chips and leveling the area.<br/>I will definitely use his company again and highly recommend this company.</p>
                    </div>
                    <a href="https://goo.gl/maps/RE5TfajyPzhz63n19" target="_blank" rel="noreferrer">Read more</a>
                </div>
                <div className={style.Review}>
                    <div className={style.ReviewHeader}>
                        <div style={{flex: "1 1 auto"}}><Image src={Gstarts} alt="fife stars review icon" /><span style={{ color: "#074578", paddingLeft: "1em" }}>5 out of 5 stars</span></div>
                        <div><Image src={Gicon} alt="google icon" /></div>
                    </div>
                    <div className={style.ReviewText}>
                        <h3><b>Laurel Jensen</b></h3>
                        <p>Nick did an awesome job! I had 5 stumps ground very very large with huge surface roots which he took the time to remove as well, even did a couple extra smaller stumps at no extra charge. He responded to my call quickly and came quickly on day scheduled to give quote. Also did the job promptly the next week as promised. Fantastic job, Highly recommend. Prices reasonable and competitive. Thanks for a great job!</p>
                    </div>
                    <a href="https://goo.gl/maps/Ns5aviJxvNkvumxTA" target="_blank" rel="noreferrer">Read more</a>
                </div>
                <div className={style.Review}>
                    <div className={style.ReviewHeader}>
                        <div style={{flex: "1 1 auto"}}><Image src={Gstarts} alt="fife stars review icon" /><span style={{ color: "#074578", paddingLeft: "1em" }}>5 out of 5 stars</span></div>
                        <div><Image src={Gicon} alt="google icon" /></div>
                    </div>
                    <div className={style.ReviewText}>
                        <h3><b>JJJC Aprea</b></h3>
                        <p>Nick did a great job from start to finish. He responded quickly when most other tree services didn’t even call back. He ground up our tree stump in less than an hour and efficiently cleaned up the area. Would recommend his company to anyone looking to have a job well done!</p>
                    </div>
                    <a href="https://goo.gl/maps/e4Ndo5ivYCw3QS8f8" target="_blank" rel="noreferrer">Read more</a>
                </div>
                <div className={style.Review}>
                    <div className={style.ReviewHeader}>
                        <div style={{flex: "1 1 auto"}}><Image src={Gstarts} alt="fife stars review icon" /><span style={{ color: "#074578", paddingLeft: "1em" }}>5 out of 5 stars</span></div>
                        <div><Image src={Gicon} alt="google icon" /></div>
                    </div>
                    <div className={style.ReviewText}>
                        <h3><b>Benny Figueroa</b></h3>
                        <p>Nick was great. He came and did an estimate on removing stumps around my yard. We confirmed on a Monday and he was on my property that very Friday. Very professional, amazing work and he was on time, which is very important to me.  He provided great advise on what to do with the areas that were worked on. Highly recommend. A-plus service!</p>
                    </div>
                    <a href="https://goo.gl/maps/9au5aqpWn6oaE5Qh8" target="_blank" rel="noreferrer">Read more</a>
                </div>
            </div>            
                <a href="https://www.google.com/search?q=stumpoff+llc&oq=stumpoff+llc&aqs=chrome..69i57j0i13.4018j0j4&sourceid=chrome&ie=UTF-8#lrd=0x89e6fb105e09b393:0x62367685dc4cedd0,1,,," target="_blank" rel="noreferrer"><button className={style.Button}>All google reviews</button></a>
            <div className={style.Badges}>
                <Image
                    src={HaBadges}
                    alt="HomeAdvisor badges"
                />
            </div>
        </div>
    )
}