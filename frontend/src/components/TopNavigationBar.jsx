import React, { useEffect, useState } from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, getPhotosByTopic } = props;
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 50;
      setIsAtTop(scrollTop <= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //on click 
    //request 
    //with the retrieved data, repopulate photolist --> done by changing photos state

  return (
    <div className={`top-nav-bar fixed top-0 left-0 right-0 z-40 ${isAtTop ? 'bg-white' : 'bg-opacity-75 bg-white'}`}>
      <span className="top-nav-bar__logo mt-2">PhotoLabs</span>
      <div className="flex flex-row items-center mr-6">
        <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;
