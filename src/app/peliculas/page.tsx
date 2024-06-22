"use client";

import React from 'react';
import useFetchData from '../hooks/useFetchData';
import MediaList from '../components/MediaList/medialist';
import Loading from '../components/Loading/loading';
import { MediaItem } from '../types/MediaItem';
import styles from './page.module.css';

const PeliculasPage: React.FC = () => {
  const { data, loading, error } = useFetchData('/data.json');

  const peliculas = data.filter((item: MediaItem) => item.category === "Movie");

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <MediaList items={peliculas} category="Movie" title="Películas"/>
      )}
    </div>
  );
};

export default PeliculasPage;
