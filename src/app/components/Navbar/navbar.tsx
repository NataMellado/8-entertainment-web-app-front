"use client"
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
  const currentPath = usePathname();

  return (
      <nav className={styles.navbar}>
        <img className={styles.logo} src="/logo.svg" alt="Logo"/>

        <ul>

          <li className={currentPath === '/' ? styles.active : ''}>
            <a href="/">
              <img className={styles.navIcon} src="/icon-nav-home.svg" alt="menu"/>
            </a>
          </li>

          <li className={currentPath === '/peliculas' ? styles.active : ''}>
            <a href="/peliculas">
              <img className={styles.navIcon} src="/icon-nav-movies.svg" alt="peliculas"/>
            </a>
          </li>

          <li className={currentPath === '/series' ? styles.active : ''}>
            <a href="/series">
              <img className={styles.navIcon} src="/icon-nav-tv-series.svg" alt="series"/>
            </a>
          </li>

        </ul>

        <img className={styles.profile} src="/profile.png" alt="profile"/>
      </nav>
  );
};

export default Navbar;
