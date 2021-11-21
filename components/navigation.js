import Image from 'next/image'
import { useState } from 'react'
import style from '../styles/Navigation.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import StumpOffLogo from '../images/icons/stumpOffLogoMin.webp'

export default function Navigation({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return <>
    <div className={style.header}>
      <nav className={style.navbar}>
        <ul className={isOpen === false ? style.navmenu : style.navmenu + ' ' + style.active}>
          <AnchorLink href='#home' onClick={openMenu}>
            <a className={style.image}>
              <Image
                src={StumpOffLogo}
                alt="stumpoff company logotype"
              />
            </a>
          </AnchorLink>
          <li className={style.navitem}>
            <AnchorLink href='#howwework'>
              <a className={style.navlink} onClick={openMenu}>How we work</a>
            </AnchorLink>
          </li>
          <li className={style.navitem}>
            <AnchorLink href='#gallery'>
              <a className={style.navlink} onClick={openMenu}>Gallery</a>
            </AnchorLink>
          </li>
          <li className={style.navitem}>
            <AnchorLink href='#getaquote'>
              <a className={style.navlink} onClick={openMenu}>Get a quote</a>
            </AnchorLink>
          </li>
          <li className={style.navitem}>
            <AnchorLink href='#feedback'>
              <a className={style.navlink} onClick={openMenu}>Feedback</a>
            </AnchorLink>
          </li>
          <li className={style.navitem}>
            <AnchorLink href='#contact'>
              <a className={style.navlink} onClick={openMenu}>Contact</a>
            </AnchorLink>
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
