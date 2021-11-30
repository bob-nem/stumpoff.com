import Image from 'next/image';
import style from '../styles/OurWorks.module.css';
import Gallery from 'react-grid-gallery';


import firstIMG from '../images/our-works/1.webp'
import secondIMG from '../images/our-works/2.webp'
import thirdIMG from '../images/our-works/3.webp'

export default function Test() {
    const IMAGES =
        [{
            src: "https://stumpoff.com/images/23.webp",
            thumbnail: "https://stumpoff.com/images/23.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://stumpoff.com/images/24.webp",
            thumbnail: "https://stumpoff.com/images/24.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300,
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "https://stumpoff.com/images/25.webp",
            thumbnail: "https://stumpoff.com/images/25.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/26.webp",
            thumbnail: "https://stumpoff.com/images/26.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/27.webp",
            thumbnail: "https://stumpoff.com/images/27.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/28.webp",
            thumbnail: "https://stumpoff.com/images/28.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/29.webp",
            thumbnail: "https://stumpoff.com/images/29.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/30.webp",
            thumbnail: "https://stumpoff.com/images/30.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/31.webp",
            thumbnail: "https://stumpoff.com/images/31.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/32.webp",
            thumbnail: "https://stumpoff.com/images/32.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/33.webp",
            thumbnail: "https://stumpoff.com/images/33.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/34.webp",
            thumbnail: "https://stumpoff.com/images/34.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/35.webp",
            thumbnail: "https://stumpoff.com/images/35.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/36.webp",
            thumbnail: "https://stumpoff.com/images/36.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/37.webp",
            thumbnail: "https://stumpoff.com/images/37.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
        {
            src: "https://stumpoff.com/images/38.webp",
            thumbnail: "https://stumpoff.com/images/38.webp",
            thumbnailWidth: 300,
            thumbnailHeight: 300
        },
    
    ]
    return (
        <div className={style.Container}>
            <h3 style={{ textAlign: "center", fontSize: "4rem" }}>Our Works</h3>
            <Gallery images={IMAGES} rowHeight={300} onSelectImage={false} backdropClosesModal={true} />
        </div>
    )
}