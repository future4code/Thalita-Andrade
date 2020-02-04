import React from 'react';
import Routes from '../Router/Routes';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
