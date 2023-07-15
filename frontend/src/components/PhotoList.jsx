import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos, addRemoveLike, likes, openModal, photoListClass } = props;
  
  const listPhotos = photos.map(photo => {
    const isLikes = likes.includes(photo.id) ? true : false;
    return <PhotoListItem isLikes={isLikes} likes={likes} {...photo} key={photo.id} addRemoveLike={addRemoveLike} openModal={openModal} />
  });

  return (<ul className={photoListClass}>
    {listPhotos}
  </ul>);
};

// PhotoList.defaultProps = {
//   photos: [
//     {
//       "id": "1",
//       "location": {
//         "city": "Montreal",
//         "country": "Canada"
//       },
//       "urls": {
//         "full": `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
//         "regular": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`
//       },
//       "user": {
//         "id": "1",
//         "username": "exampleuser",
//         "name": "Joe Example",
//         "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
//       }
//     },
//     {
//       "id": "2",
//       "location": {
//         "city": "Toronto",
//         "country": "Canada"
//       },
//       "urls": {
//         "full": `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
//         "regular": `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`
//       },
//       "user": {
//         "id": "2",
//         "username": "exampleuser",
//         "name": "Joe Example",
//         "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
//       }
//     },
//     {
//       "id": "3",
//       "location": {
//         "city": "Ottawa",
//         "country": "Canada"
//       },
//       "urls": {
//         "full": `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
//         "regular": `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`
//       },
//       "user": {
//         "id": "3",
//         "username": "exampleuser",
//         "name": "Joe Example",
//         "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
//       }
//     }
//   ]
// };

export default PhotoList;