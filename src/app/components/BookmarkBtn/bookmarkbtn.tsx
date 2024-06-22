import React from 'react';
import styles from './BookmarkBtn.module.css';

interface BookmarkBtnProps {
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

const BookmarkBtn: React.FC<BookmarkBtnProps> = ({ isBookmarked, onToggleBookmark }) => {
  const handleClick = () => {
    onToggleBookmark(); 
  };

  return (
    <button className={styles.bookmarkBtn} onClick={handleClick}>
      <img
        src={isBookmarked ? "/icon-bookmark-full.svg" : "/icon-bookmark-empty.svg"}
        alt="Bookmark"
      />
    </button>
  );
};

export default BookmarkBtn;
