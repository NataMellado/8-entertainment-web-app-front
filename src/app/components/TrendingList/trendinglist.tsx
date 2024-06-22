import React from 'react';
import { MediaItem } from '../../types/MediaItem';
import styles from './trendinglist.module.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import BookmarkBtn from '../BookmarkBtn/bookmarkbtn';

interface TrendingListProps {
  items: MediaItem[];
}

const TrendingList: React.FC<TrendingListProps> = ({ items }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Movie':
        return '/icon-category-movie.svg';
      case 'TV Series':
        return '/icon-category-tv.svg';
      default:
        return '';
    }
  };

  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [setWidth]);

  return (
    
      <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor: "grabbing"}}>
        <h1 className={styles.title}>Tendencias</h1>
        <motion.div 
          drag="x" 
          dragConstraints={{ right:0, left: -width}} 
          className={styles.innerCarousel}>
          {items.map((item, index) => (
            <motion.div key={index} className={styles.mediaItem}>

            <div className={styles.mediaThumbnailWrapper}>
              <img
                  src={item.thumbnail.trending.small.replace('./public', '')}
                  alt={item.title}
                  className={styles.mediaThumbnail}
                />
            </div>
             
              <div className={styles.mediaInfo}>
                <div className={styles.mediaDetails}>
                  <p className={styles.mediaYear}>{item.year}</p>
                  <span>•</span>
                  <div className={styles.mediaTypeContainer}>
                    <img src={getCategoryIcon(item.category)} alt={item.category} className={styles.mediaTypeIcon} />
                    <p className={styles.mediaType}>{item.category}</p>
                  </div>
                  <span>•</span>
                  <p className={styles.mediaRating}>{item.rating}</p>
                </div>
                <h1 className={styles.mediaTitle}>{item.title}</h1>
              </div>

              <button className={styles.playBtn}>
                  <img className={styles.playBtnImg} src='/icon-play.svg' alt='Play' />
                  <p>Play</p>
              </button>

              
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
  );
};

export default TrendingList;
