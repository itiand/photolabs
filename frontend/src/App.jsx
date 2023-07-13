import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation

// const arrayPhotos = Array(3).fill(<PhotoListItem />);
const App = () => (


  <div className="App">
    {/* <PhotoListItem/> */}
    {/* {arrayPhotos} */}
    <PhotoList />
  </div>
);

export default App;