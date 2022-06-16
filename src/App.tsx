import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HeaderComponent from './components/header/Header';
import SliderComponent from './components/slider/Slider';
import MoviesComponent from './components/movies/Movies';
import MovieInformation from './components/movie-information/MovieInformation'

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={
          <>
            <SliderComponent />
            <MoviesComponent />
          </>
        } />
        <Route path="/movie_information/:imgUrl/:title/:description" element={<MovieInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
