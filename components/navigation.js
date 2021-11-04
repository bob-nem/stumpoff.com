import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import style from '../styles/Navigation.module.css'

import StumpOffLogo from '../images/icons/stumpOffLogoMin.webp'

export default function Navigation({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return <>
    <div className={style.header}>
      <nav className={style.navbar}>
        <ul className={isOpen === false ? style.navmenu : style.navmenu + ' ' + style.active}>
          <Link href='/#home'>
            <a className={style.image}>
              <Image
                src={StumpOffLogo}
                alt="stumpoff company logotype"
              />
            </a>
          </Link>
          <li className={style.navitem}>
            <Link href='/#howwework'>
              <a className={style.navlink}>How we work</a>
            </Link>
          </li>
          <li className={style.navitem}>
            <Link href='/#gallery'>
              <a className={style.navlink}>Gallery</a>
            </Link>
          </li>
          <li className={style.navitem}>
            <Link href='/#getaquote'>
              <a className={style.navlink}>Get a quote</a>
            </Link>
          </li>
          <li className={style.navitem}>
            <Link href='/#feedback'>
              <a className={style.navlink}>Feedback</a>
            </Link>
          </li>
          <li className={style.navitem}>
            <Link href='/#contact'>
              <a className={style.navlink}>Contact</a>
            </Link>
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
