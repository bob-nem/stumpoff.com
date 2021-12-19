import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import style from '../styles/Navigation.module.css'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

import StumpOffLogo from '../images/icons/stumpOffLogoMin.webp'

export default function Navigation({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return <>
    <div className={style.header}>
      <nav className={style.navbar}>
        <ul className={isOpen === false ? style.navmenu : style.navmenu + ' ' + style.active}>
          <Link href='/#home'>
            <a className={style.image} onClick={openMenu}>
              <Image
                src={StumpOffLogo}
                alt="stumpoff company logotype"
              />
            </a>
          </Link>
          <li className={style.navitem}>
            <Link href='/#howwework'>
              <a className={style.navlink} onClick={openMenu}>How we work</a>
            </Link>
          </li>
          <li className={style.navitem}>
            <Link href='/#portfolio'>
              <a className={style.navlink} onClick={openMenu}>Portfolio</a>
            </Link>
          </li>
          <li className={style.navitem}>
            <Link href='/#cost'>
              <a className={style.navlink} onClick={openMenu}>Cost</a>
            </Link>
          </li>
          <li className={style.navitem}>
            <Link href='/#getaquote'>
              <a className={style.navlink} onClick={openMenu}>Get a quote</a>
            </Link>
          </li>
          <li className={style.navitem}>
            <Link href='/#reviews'>
              <a className={style.navlink} onClick={openMenu}>Reviews</a>
            </Link>
          </li>
          <li className={style.navitem}>
            <Link href='/#contact'>
              <a className={style.navlink} onClick={openMenu}>Contact</a>
            </Link>
          </li>
          <li className={style.socials}>
            <p style={{ color: "white", paddingBottom: "4px" }}>We are in socials:</p>
            <div>
              <Link href='https://www.facebook.com/StumpOFF/'>
                <a target="_blank"><BsFacebook className={style.socialsIcon} /></a>
              </Link>
              <Link href='https://twitter.com/stump_off'>
                <a target="_blank"><BsTwitter className={style.socialsIcon} /></a>
              </Link>
              <Link href='https://www.instagram.com/stump_off/'>
                <a target="_blank"><BsInstagram className={style.socialsIcon} /></a>
              </Link>
            </div>
          </li>
        </ul>
        <button className={isOpen === false ?
          style.hamburger : style.hamburger + ' ' + style.active}
          onClick={openMenu}
        >
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </button>
      </nav>
    </div>
    {children}
  </>
}
