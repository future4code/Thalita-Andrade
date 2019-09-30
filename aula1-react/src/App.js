import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="container">
      <header>
        <h1>FutureTube</h1>
        <input placeholder="Buscar"></input>
      </header>
      <section className="container-interno">
        <aside>
          <ul>
            <li>Início</li>
            <li>Em alta</li>
            <li>Incrições</li>
            <li>originais</li>
            <li>Biblioteca</li>
            <li>Histórico</li>
          </ul>
        </aside>
        <div className="link-videos">
          <ul>
            <li>
              <img src="https://picsum.photos/id/129/200/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/200/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/200/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/200/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/200/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/200/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/200/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/200/200"></img>
              <p>Título vídeo</p>
            </li>
          </ul>

        </div>
      </section>
      <footer>Oi eu moro no footer!</footer>
    </div>
 
  );
}

export default App;
