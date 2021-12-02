import Link from 'next/link';
import Head from 'next/head'
import style from '../styles/OurWorks.module.css';
import Gallery from 'react-grid-gallery';
import Footer from './blocks/footer'

import { BsArrowLeftSquare } from 'react-icons/bs'

export default function Test() {
    const IMAGES =
        [{
            src: "https://stumpoff.com/images/23.webp",
            thumbnail: "https://stumpoff.com/images/23.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump Grinding in Holyoke"
        },
        {
            src: "https://stumpoff.com/images/24.webp",
            thumbnail: "https://stumpoff.com/images/24.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump Grinding in Chicopee"
        },
        {
            src: "https://stumpoff.com/images/25.webp",
            thumbnail: "https://stumpoff.com/images/25.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump Grinding in West Springfield"
        },
        {
            src: "https://stumpoff.com/images/26.webp",
            thumbnail: "https://stumpoff.com/images/26.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in West Springfield"
        },
        {
            src: "https://stumpoff.com/images/27.webp",
            thumbnail: "https://stumpoff.com/images/27.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in West Agawam"
        },
        {
            src: "https://stumpoff.com/images/28.webp",
            thumbnail: "https://stumpoff.com/images/28.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in Longmeadow"
        },
        {
            src: "https://stumpoff.com/images/29.webp",
            thumbnail: "https://stumpoff.com/images/29.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding near me"
        },
        {
            src: "https://stumpoff.com/images/30.webp",
            thumbnail: "https://stumpoff.com/images/30.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding in Suffield"
        },
        {
            src: "https://stumpoff.com/images/31.webp",
            thumbnail: "https://stumpoff.com/images/31.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Tree stump grinding in my property"
        },
        {
            src: "https://stumpoff.com/images/32.webp",
            thumbnail: "https://stumpoff.com/images/32.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding in Enfield"
        },
        {
            src: "https://stumpoff.com/images/33.webp",
            thumbnail: "https://stumpoff.com/images/33.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding in Windsor Locks"
        },
        {
            src: "https://stumpoff.com/images/35.webp",
            thumbnail: "https://stumpoff.com/images/35.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in Windsor"
        },
        {
            src: "https://stumpoff.com/images/36.webp",
            thumbnail: "https://stumpoff.com/images/36.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in East Windsor"
        },
        {
            src: "https://stumpoff.com/images/37.webp",
            thumbnail: "https://stumpoff.com/images/37.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump removal in Broad Brook"
        },
        {
            src: "https://stumpoff.com/images/38.webp",
            thumbnail: "https://stumpoff.com/images/38.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            alt: "Stump grinding in South Winsor"
        },]
    return (
        <>
            <Head>
                <title>Tree Stump Grinding picture gallery</title>
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