import Head from 'next/head'
import dynamic from 'next/dynamic'
import style from '../styles/Home.module.css'

import Header from './blocks/header'
import About from './blocks/about'
import Reasons from './blocks/reasons'
import Team from './blocks/team'
import Getaquote from './blocks/getaquote'
const DynamicGallery = dynamic(() => import('./blocks/gallery'))
import Cost from './blocks/cost'
import Feedback from './blocks/feedback'
import Contacts from './blocks/contacts'
import Footer from './blocks/footer'

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Tree Stump Grinding </title>
        <meta name="description" content="StumpOFF LLC is a local professional stump grinding company specializing in tree stump grinding in Connecticut. We guarantee a careful, clean, and professional job." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="tree stump grinding, stump removal" />
        <meta name="author" content="it.for-all.world" />
        <link rel="canonical" href="https://stumpoff.com" key="canonical" />
        <meta property="og:title" content="Tree Stump Grinding" />
        <meta property="og:description" content="StumpOFF LLC is a local professional stump grinding company specializing in tree stump grinding in Connecticut. We guarantee a careful, clean, and professional job." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stumpoff.com" />
        <meta property="og:image" content="https://stumpoff.com/images/stump.webp" />
        <meta property="og:image:alt" content="A shiny stump before removing" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
      </Head>
      <main className={style.main}>
        <Header />
        <About />
        <Reasons />
        <Team />
        <DynamicGallery />
        <Cost />
        <Getaquote />
        <Feedback />
        <Contacts />
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
    </div>
  )
}
