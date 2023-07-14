import React, { useEffect, useState } from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist } = props;
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 100;
      setIsAtTop(scrollTop <= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top-nav-bar fixed top-0 left-0 right-0 z-50 ${isAtTop ? 'bg-white' : 'bg-opacity-75 bg-white'}`}>
      <span className="top-nav-bar__logo mt-2">PhotoLabs</span>
      <div className="flex flex-row items-center mr-6">
        <TopicList topics={topics} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;
