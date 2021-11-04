import Image from 'next/image'
import style from '../../styles/Contacts.module.css'
import GoogleMap from './map'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

import Chainsaw from '../../images/pictures/stump-with-chainsaw.webp'

export default function Feedback() {
    return (
        <>
            <div className={style.Wrapper}>
                <div className={style.Container}>
                    <div className={style.Top} id="contact">
                        <div className={style.Left}>
                            <Image
                                src={Chainsaw}
                                alt="sawing down a stump with a chainsaw"
                            />
                        </div>
                        <div className={style.Right}>
                            <h2 className={style.Header}>Contact Us</h2>
                            <p>We try to be friends with our clients, so we are happy to answer your questions.</p>
                            <div style={{ display: "inline-flex" }}><FaMapMarkerAlt style={{ color: "#ff9045", fontSize: "2.3rem", border: "2px solid #074578", borderRadius: "50%", padding: ".4rem", marginRight: ".75rem" }} /><p>39 Sinclair St, Windsor, CT 06095</p></div>
                            <div style={{ display: "inline-flex" }}><GrMail style={{ color: "#ff9045", fontSize: "2.3rem", border: "2px solid #074578", borderRadius: "50%", padding: ".4rem", marginRight: ".75rem" }} /><a href="mailto:info@stumpoff.com">info@stumpoff.com (free estimate)</a></div>
                            <div style={{ display: "inline-flex" }}><FaPhoneAlt style={{ color: "#ff9045", fontSize: "2.3rem", border: "2px solid #074578", borderRadius: "50%", padding: ".4rem", marginRight: ".75rem" }} /><a href="tel:+18606907268">(860) 690 72 68</a></div>
                        </div>
                    </div>
                    <div className={style.Map}>
                        <GoogleMap />
                    </div>
                </div>
            </div>
            <div className={style.Areas}>
                <p>
                    <h3>SERVICE AREAS</h3>
                        Holyoke, Chicopee, West Springfield, Springfield, Agawam, Longmeadow, Suffield, Enfield, Windsor Locks, Windsor, East Windsor, Broad Brook, South Winsor, Ellington, Somers, Vernon, Rockville, Manchester, Addison, Glastonbury, Rocky Hill, Wethersfield, Newington, Hartford, West Hartford, East Hartford, Farmington, New Britain, Bloomfield, East Granby.
                </p>            
            </div>
        </>
    )
}