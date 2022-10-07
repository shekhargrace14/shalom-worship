import React, { useState } from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import  styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons]= useState(false);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href='/'><h1>Shalom Worship</h1></a>
        </div>

        <div className={ showMediaIcons ? `${styles.menu_links} ${styles.mobile_menu_links}` : `${styles.menu_links}`}>
            <ul className={styles.ul}>
              <li className={styles.li}><Link href="/"><a>Home</a></Link></li>
              <li className={styles.li}><Link href="/about"><a>About</a></Link></li>
              {/* <li className={styles.li}><Link href="bands"><a>Bands</a></Link></li> */}
              {/* <li className={styles.li}><Link href="artist"><a>Artist</a></Link></li> */}
              <li className={styles.li}><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>
        <div className={styles.social_media}>
          <ul className={styles.social_media_desktop}>
            <li className={styles.li}><a href='https://www.youtube.com/watch?v=T-qoHFBcFHw' target="_blank"><FaFacebook/></a></li>
            <li className={styles.li}><a href='https://www.youtube.com/watch?v=T-qoHFBcFHw' target="_blank"><FaTwitter/></a></li>
            <li className={styles.li}><a href='https://www.youtube.com/watch?v=T-qoHFBcFHw' target="_blank"><FaInstagram/></a></li>
          </ul>
          <div className={styles.hamburger_menu}>
            <a href='#' onClick= { () => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></a>
          </div>
        </div>
      </div>
    </>
)
}

export default Navbar