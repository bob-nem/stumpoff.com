import Head from 'next/head'
import style from '../styles/Home.module.css'

import Header from './blocks/header'
import About from './blocks/about'
import Reasons from './blocks/reasons'
import Team from './blocks/team'

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Tree Stump Grinding</title>
        <meta name="description" content="We are professionals who are ready to quickly and completely remove tree stumps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <Header />
        <About />
        <Reasons />
        <Team />
      </main>
      <footer className={style.footer}>
      </footer>
    </div>
  )
}
