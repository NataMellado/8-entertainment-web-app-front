import React, { useState } from 'react';
import { MediaItem } from '../../types/MediaItem';
import styles from './medialist.module.css';
import BookmarkBtn from '../BookmarkBtn/bookmarkbtn';

interface MediaListProps {
  items: MediaItem[];
  category: string;
  title: string;
}

const MediaList: React.FC<MediaListProps> = ({ items, category, title }) => {
  const [mediaItems, setMediaItems] = useState(items);

  const handleToggleBookmark = (index: number) => {
    const newItems = [...mediaItems];
    newItems[index].isBookmarked = !newItems[index].isBookmarked;
    setMediaItems(newItems);
  };

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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.mediaList}>
        {mediaItems.map((item, index) => (
          <div key={index} className={styles.mediaItem}>
            <img
              src={item.thumbnail.regular.small.replace('./public', '')}
              alt={item.title}
              className={styles.mediaThumbnail}
            />
            <div className={styles.mediaDetails}>
              <p className={styles.mediaYear}>{item.year}</p>
              <span>•</span>
              <div className={styles.mediaTypeContainer}>
                <img src={getCategoryIcon(category)} alt={category} className={styles.mediaTypeIcon} />
                <p className={styles.mediaType}>{category}</p>
              </div>
              <span>•</span>
              <p className={styles.mediaRating}>{item.rating}</p>
            </div>
            <h2 className={styles.mediaTitle}>{item.title}</h2>
            <button className={styles.playBtn}>
              <img className={styles.playBtnImg} src='/icon-play.svg' alt='Play' />
              <p>Play</p>
            </button>
            <BookmarkBtn
              isBookmarked={item.isBookmarked ?? false}
              onToggleBookmark={() => handleToggleBookmark(index)}
            />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default MediaList;
