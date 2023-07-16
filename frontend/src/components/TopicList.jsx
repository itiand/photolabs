import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {

  const { topics, getPhotosByTopic } = props;
  const topicList = topics.map((topic) => {
    return <TopicListItem {...topic} key={topic.slug} getPhotosByTopic={getPhotosByTopic} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );

};

export default TopicList;