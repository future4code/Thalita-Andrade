import React from 'react';
import Routes from '../Router/Routes';
import { BrowserRouter } from 'react-router-dom';
import { ContentApp } from './styled';

function App() {
  return (
    <BrowserRouter>
      <ContentApp>
        <Routes />
      </ContentApp>
    </BrowserRouter>
  );
}

export default App;
