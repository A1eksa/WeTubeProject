import React, { useState } from 'react';
import data from './assets/data.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import Home from './components/Home';
import { Playback } from './components/Playback';

export const App = () => {
  console.log(data);

  const [videos, setVideos] = useState([]);
  return (
    <>
      <SearchBar placeholder='Search' data={data} />
      <Home data={data} />
      <BrowserRouter>
        <Routes>
          <Route path='/' component={<Home.js />} />
          {/* <Route path='/playback' element={<Playback.js />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
