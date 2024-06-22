"use client";

import React from 'react';
import useFetchData from '../hooks/useFetchData';
import MediaList from '../components/MediaList/medialist'; 
import Loading from '../components/Loading/loading';
import { MediaItem } from '../types/MediaItem'; 
import styles from './page.module.css';

const SeriesPage: React.FC = () => {
  const { data, loading, error } = useFetchData('/data.json');

  const series = data.filter((item: MediaItem) => item.category === "TV Series");

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <MediaList items={series} category="TV Series" title="Series"/>
      )}
    </div>
  );
};

export default SeriesPage;
