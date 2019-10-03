import React from 'react';
import './App.css';
import { PageSection } from './components/PageSection/PageSection';
import { BigCard } from './components/BigCard/BigCard';
import { ImageButton } from './components/ImageButton/ImageButton';
import { SmallCard } from './components/SmallCard/SmallCard';
import imagem1 from './expand.svg';
import imagem2 from './facebook.png';
import imagem3 from './email.svg';
import imagem4 from './house.svg';
import imagem5 from './future.png';
import imagem6 from './outsmart.png';

const pageSection1 = {
  titulo: "Dados Pessoais",
}

const pageSection2 = {
  titulo: "Experiências profissionais",
}

const pageSection3 = {
  titulo: "Minhas redes sociais",
}

const bigCard1 = {
  titulo: "Astrodev",
  texto: " Oi, eu sou o Astrodev. Sou o chefe dos alunos da Future4. Adoro pedir e-mails nasexta-feira e epserar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles.",
  image: imagem5,
  
}  

const bigCard2 = {
  titulo: "Future4",
  texto: "Formando desenvolvedores para o futuro.",
  image: imagem5,
}  

const bigCard3 = {
  titulo: "Outsmart",
  texto: " Criando apps incríveis para grandes clientes.",
  image: imagem6,
}  

const smallCard1 = {
  titulo: "Email:",
  texto: " future4code@gmail.com",
  image: imagem3,
}  

const smallCard2 = {
  titulo: "Endereço:",
  texto: " Rua do Futuro, 4.",
  image: imagem4,
}  

const imageButton1 = {
  titulo: "Ver mais",
  image: imagem1,
}  

const imageButton2 = {
  titulo: "Facebook",
  image: imagem2,
}  

function App() {
  return (
    <div className="App">
      <PageSection titulo={pageSection1.titulo} />

      <BigCard titulo={bigCard1.titulo}  texto={bigCard1.texto} image={bigCard1.image}/>

      <SmallCard titulo={smallCard1.titulo}  texto={smallCard1.texto} image={smallCard1.image}/>

      <SmallCard titulo={smallCard2.titulo}  texto={smallCard2.texto} image={smallCard2.image}/>

      <ImageButton titulo={imageButton1.titulo}  image={imageButton1.image}/>

      <PageSection titulo={pageSection2.titulo} />

      <BigCard titulo={bigCard2.titulo}  texto={bigCard2.texto} image={bigCard2.image}/>

      <BigCard titulo={bigCard3.titulo}  texto={bigCard3.texto} image={bigCard3.image}/>

      <PageSection titulo={pageSection3.titulo} />

      <ImageButton titulo={imageButton2.titulo}  image={imageButton2.image}/>
    </div>
  );
}

export default App;
