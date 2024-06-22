"use client";

import React from 'react';
import useFetchData from './hooks/useFetchData';
import TrendingList from './components/TrendingList/trendinglist';
import MediaList from './components/MediaList/medialist';
import Loading from './components/Loading/loading';
import { MediaItem } from './types/MediaItem';

const Home: React.FC = () => {
  const { data, loading, error } = useFetchData('/data.json');

  const trendingItems: MediaItem[] = data.filter((item: MediaItem) => 
    item.isTrending);
  const recommendedMovies: MediaItem[] = data.filter((item: MediaItem) =>
    item.isRecommended && item.category === 'Movie');
  const recommendedSeries: MediaItem[] = data.filter((item: MediaItem) =>
    item.isRecommended && item.category === 'TV Series');

  return (
    <div style={{ display: "grid", gap: "50px" }}>
      <div style={{ overflow: "hidden"}}>
  
        {loading ? (
          <Loading />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <TrendingList items={trendingItems} />
        )}
      </div>

      <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <MediaList items={recommendedMovies} category="Movie" title="Solo para ti - Películas" />
        )}
      </div>

      <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <MediaList items={recommendedSeries} category="TV Series" title="Solo para ti - Series"/>
        )}
      </div>
    </div>
  );
};

export default Home;
