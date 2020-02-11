import React from 'react';
import Routes from '../Router/Routes';
import { BrowserRouter } from 'react-router-dom';
import { ContentApp } from './styled';

export default function App() {
  return (
    <BrowserRouter>
      <ContentApp>
        <Routes />
      </ContentApp>
    </BrowserRouter>
  );
}

