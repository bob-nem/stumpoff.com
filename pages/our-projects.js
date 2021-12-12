import Link from 'next/link';
import Head from 'next/head'
import style from '../styles/OurWorks.module.css';
import Gallery from 'react-grid-gallery';
import Footer from './blocks/footer'

import { BsArrowLeftSquare } from 'react-icons/bs'

export default function Test() {
    const IMAGES =
        [{
            src: "https://stumpoff.com/images/gallery/1.webp",
            thumbnail: "https://stumpoff.com/images/gallery/1.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump Grinding in Holyoke"
        },
        {
            src: "https://stumpoff.com/images/gallery/2.webp",
            thumbnail: "https://stumpoff.com/images/gallery/2.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump Grinding in Chicopee"
        },
        {
            src: "https://stumpoff.com/images/gallery/3.webp",
            thumbnail: "https://stumpoff.com/images/gallery/3.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump Grinding in West Springfield"
        },
        {
            src: "https://stumpoff.com/images/gallery/4.webp",
            thumbnail: "https://stumpoff.com/images/gallery/4.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in West Springfield"
        },
        {
            src: "https://stumpoff.com/images/gallery/5.webp",
            thumbnail: "https://stumpoff.com/images/gallery/5.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in West Agawam"
        },
        {
            src: "https://stumpoff.com/images/gallery/6.webp",
            thumbnail: "https://stumpoff.com/images/gallery/6.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in Longmeadow"
        },
        {
            src: "https://stumpoff.com/images/gallery/7.webp",
            thumbnail: "https://stumpoff.com/images/gallery/7.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding near me"
        },
        {
            src: "https://stumpoff.com/images/gallery/8.webp",
            thumbnail: "https://stumpoff.com/images/gallery/8.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding in Suffield"
        },
        {
            src: "https://stumpoff.com/images/gallery/9.webp",
            thumbnail: "https://stumpoff.com/images/gallery/9.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Tree stump grinding in my property"
        },
        {
            src: "https://stumpoff.com/images/gallery/10.webp",
            thumbnail: "https://stumpoff.com/images/gallery/10.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding in Enfield"
        },
        {
            src: "https://stumpoff.com/images/gallery/11.webp",
            thumbnail: "https://stumpoff.com/images/gallery/11.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding in Windsor Locks"
        },
        {
            src: "https://stumpoff.com/images/gallery/12.webp",
            thumbnail: "https://stumpoff.com/images/gallery/12.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in Windsor"
        },
        {
            src: "https://stumpoff.com/images/gallery/13.webp",
            thumbnail: "https://stumpoff.com/images/gallery/13.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in East Windsor"
        },
        {
            src: "https://stumpoff.com/images/gallery/14.webp",
            thumbnail: "https://stumpoff.com/images/gallery/14.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in Broad Brook"
        },
        {
            src: "https://stumpoff.com/images/gallery/15.webp",
            thumbnail: "https://stumpoff.com/images/gallery/15.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding in South Winsor"
        },
        {
            src: "https://stumpoff.com/images/gallery/16.webp",
            thumbnail: "https://stumpoff.com/images/gallery/16.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in near me"
        },
        {
            src: "https://stumpoff.com/images/gallery/17.webp",
            thumbnail: "https://stumpoff.com/images/gallery/17.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in Winsor"
        },
        {
            src: "https://stumpoff.com/images/gallery/18.webp",
            thumbnail: "https://stumpoff.com/images/gallery/18.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in Connecticut"
        },
        {
            src: "https://stumpoff.com/images/gallery/19.webp",
            thumbnail: "https://stumpoff.com/images/gallery/19.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in East Granby."
        },]
    return (
        <>
            <Head>
                <title>Tree Stump Grinding - Picture Gallery</title>
                <meta name="description" content="Our finished stump removal works" />
                <link rel="canonical" href="https://stumpoff.com/our-projects" key="canonical" />
            </Head>
            <Link href='/#home'>
                <a>
                    <div className={style.Back}>
                        <BsArrowLeftSquare className={style.ArrowIcon} />

                    </div>
                </a>
            </Link>
            <div className={style.Container}>

                <h1>Our Projects</h1>
                <div className={style.Gallery}>
                    <Gallery images={IMAGES} rowHeight={300} onSelectImage={false} backdropClosesModal={true} />
                </div>
            </div>
            <Footer style={{ position: "absolute", bottom: 0, width: "100%" }} />
        </>
    )
}