import { useState } from "react";

const useApplicationData = () => {

  const [likes, setLikes] = useState(["1","7","3"]);
  // const [selectedImg, setSelectedImage] = useState(initialSelectedImgState);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const initialSelectedImgState = {
  //   id: ``,
  //   location: {
  //     city: ``,
  //     country: ``
  //   },
  //   urls: {
  //     full: ``,
  //     regular: ``
  //   },
  //   user: {
  //     id: ``,
  //     username: ``,
  //     name: ``,
  //     profile: ``
  //   }
  // }

  const state = {
    likes: likes,
    setLikes: setLikes
    // selectedImg: '..',
    //....
    ///.. after all states and setStates
    //
  };

  return {
    state
    // onPhotoSelect,
    // updateToFavPhotoIds,
    // onLoadTopic,
    // onClosePhotoDetailsModal
  };
};

export default useApplicationData;