import Head from 'next/head'
import style from '../styles/Home.module.css'
import Link from "next/link";

import Header from './blocks/header'
import About from './blocks/about'
import Reasons from './blocks/reasons'
import Team from './blocks/team'
import Getaquote from './blocks/getaquote'
import Gallery from './blocks/gallery'
import Feedback from './blocks/feedback'
import Contacts from './blocks/contacts'
import Footer from './blocks/footer'

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Tree Stump Grinding</title>
        <meta name="description" content="We are professionals who are ready to quickly and completely remove tree stumps" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="msvalidate.01" content="B8ACE33552C4541B4DEC70E874CE71D1" />
        <link
          rel="preload"
          href="/fonts/LuckiestGuy-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ubuntu-Light.ttf)"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ubuntu-Regular.ttf)"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ubuntu-Medium.ttf)"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <main className={style.main}>
        <Header />
        <About />
        <Reasons />
        <Team />
        <Gallery />
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
