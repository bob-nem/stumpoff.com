import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import style from '../../styles/Contacts.module.css'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { BsCalendar2WeekFill } from 'react-icons/bs'

const DynamicGoogleMap = dynamic(() => import('./map'))

import Chainsaw from '../../images/pictures/stump-with-chainsaw.webp'

export default function Contacts() {
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
                            <Link href="/contact"><a style={{ paddingRight: 0, paddingBottom: 0 }}><h2 className={style.Header}>Contact Us</h2></a></Link>
                            <p>We try to be friends with our clients, so we are happy to answer your questions.</p>
                            <div className={style.ContactData}><FaMapMarkerAlt style={{ minWidth: "38px", color: "#ff9045", fontSize: "2.3rem", border: "2px solid #074578", borderRadius: "50%", padding: ".4rem", marginRight: ".75rem" }} /><p>39 Sinclair St, Windsor, CT 06095</p></div>
                            <div className={style.ContactData}><GrMail style={{ minWidth: "38px", color: "#ff9045", fontSize: "2.3rem", border: "2px solid #074578", borderRadius: "50%", padding: ".4rem", marginRight: ".75rem" }} /><a href="mailto:info@stumpoff.com">info@stumpoff.com (free estimate)</a></div>
                            <div className={style.ContactData}><FaPhoneAlt style={{ minWidth: "38px", color: "#ff9045", fontSize: "2.3rem", border: "2px solid #074578", borderRadius: "50%", padding: ".4rem", marginRight: ".75rem" }} /><a href="tel:+18606907268">(860) 690 72 68</a></div>
                            <div className={style.ContactData}><BsCalendar2WeekFill style={{ minWidth: "38px", color: "#ff9045", fontSize: "2.3rem", border: "2px solid #074578", borderRadius: "50%", padding: ".4rem", marginRight: ".75rem" }} /><p>Monday-Friday 9AM–8PM,<br />Saturday-Sunday 10AM-8PM</p></div>
                        </div>
                    </div>
                    <div className={style.Map}>
                        <DynamicGoogleMap />
                    </div>
                </div>
            </div>
            <div className={style.Areas}>
                <p>
                    <strong>SERVICE AREAS</strong>
                    <Link href="/areas/holyoke"><a>Holyoke,</a></Link> <Link href="/areas/chicopee"><a>Chicopee,</a></Link> <Link href="/areas/west-springfield" ><a>West Springfield,</a></Link> <Link href="/areas/springfield" ><a>Springfield,</a></Link> <Link href="/areas/agawam" ><a>Agawam,</a></Link> <Link href="/areas/longmeadow" ><a>Longmeadow,</a></Link> <Link href="/areas/suffield" ><a>Suffield,</a></Link> <Link href="/areas/enfield" ><a>Enfield,</a></Link> <Link href="/areas/windsor-locks" ><a>Windsor Locks,</a></Link> <Link href="/areas/windsor" ><a>Windsor,</a></Link> <Link href="/areas/east-windsor" ><a>East Windsor,</a></Link> <Link href="/areas/broad-brook" ><a>Broad Brook,</a></Link> <Link href="/areas/south-winsor" ><a>South Winsor,</a></Link> <Link href="/areas/ellington" ><a>Ellington,</a></Link> <Link href="/areas/somers" ><a>Somers,</a></Link> <Link href="/areas/vernon" ><a>Vernon,</a></Link> <Link href="/areas/rockville" ><a>Rockville,</a></Link> <Link href="/areas/manchester" ><a>Manchester,</a></Link> <Link href="/areas/addison" ><a>Addison,</a></Link> <Link href="/areas/glastonbury" ><a>Glastonbury,</a></Link> <Link href="/areas/rocky-hill" ><a>Rocky Hill,</a></Link> <Link href="/areas/wethersfield" ><a>Wethersfield,</a></Link> <Link href="/areas/newington" ><a>Newington,</a></Link> <Link href="/areas/hartford" ><a>Hartford,</a></Link> <Link href="/areas/west-hartford" ><a>West Hartford,</a></Link> <Link href="/areas/east-hartford" ><a>East Hartford,</a></Link> <Link href="/areas/farmington" ><a>Farmington,</a></Link> <Link href="/areas/new-britain" ><a>New Britain,</a></Link> <Link href="/areas/bloomfield" ><a>Bloomfield,</a></Link> <Link href="/areas/east-granby" ><a>East Granby</a></Link>.
                </p>
            </div>
        </>
    )
}