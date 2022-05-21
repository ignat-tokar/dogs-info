import axios from 'axios';
import { useEffect, useState } from 'react';
import { breedsAPI, favouritesAPI, imagesAPI, votesAPI } from './api/api';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import MainPageContainer from './components/MainPage/MainPageContainer';


function App() {

  return (
    <MainPageContainer />
  );
}

export default App;
