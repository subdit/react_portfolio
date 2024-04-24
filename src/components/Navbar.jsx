import styles from './Navbar.module.css';
import React, { useState } from 'react';

import { getImageUrl } from '../utils.js';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl('../nav/closeIcon.png')
              : getImageUrl('../nav/hamberger_menu.png')
          }
          alt='menu-button'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={styles.menuItems}>
          <li>
            <a href='about'>About</a>
          </li>
          <li>
            <a href='Experience'>Experience</a>
          </li>
          <li>
            <a href='project'>Project</a>
          </li>
          <li>
            <a href='contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
