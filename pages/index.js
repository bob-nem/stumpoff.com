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
