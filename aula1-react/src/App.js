import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="Container">

      <header>
        <h1>FutureTube</h1>
        <input placeholder="Buscar"></input>
      </header>

      <div className="Container-interno">

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

        <section>
          <ul className="Link-videos">
            <li>
              <img src="https://picsum.photos/id/129/300/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/300/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/300/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/300/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/300/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/300/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/300/200"></img>
              <p>Título vídeo</p>
            </li>
            <li>
              <img src="https://picsum.photos/id/129/300/200"></img>
              <p>Título vídeo</p>
            </li>
          </ul>
        </section>

      </div>
      <footer>
        <h1>Oi eu moro no footer!</h1>
      </footer>
    </div>
 
  );
}

export default App;
