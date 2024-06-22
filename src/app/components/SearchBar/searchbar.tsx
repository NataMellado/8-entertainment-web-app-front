"use client";
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './searchbar.module.css';

const SearchBar: React.FC = () => {
  const pathname = usePathname();
  let placeholder = 'Busca películas y series';


  if (pathname === '/series') {
    placeholder = 'Busca series';
  } else if (pathname === '/peliculas') {
    placeholder = 'Busca películas';
  }

  return (
    <div className={styles.container}>
      <img src="/icon-search.svg" alt="" className={styles.icon} />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
