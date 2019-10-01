import React from 'react';
import './App.css';
import { PageSection } from './components/PageSection/PageSection';
import { BigCard } from './components/BigCard/BigCard';
import { ImageButton } from './components/ImageButton/ImageButton';
import { SmallCard } from './components/SmallCard/SmallCard';

const pageSection1 = {
  titulo: "Dados Pessoais"
}

const pageSection2 = {
  titulo: "Experiências profissionais"
}

const pageSection3 = {
  titulo: "Minhas redes sociais"
}

const bigCard1 = {
  titulo: "Astrodev",
  texto: " Oi, eu sou o Astrodev. Sou o chefe dos alunos da Future4. Adoro pedir e-mails nasexta-feira e epserar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."
  
}  

const bigCard2 = {
  titulo: "Future4",
  texto: "Formando desenvolvedores para o futuro."
  
}  

const bigCard3 = {
  titulo: "Outsmart",
  texto: " Criando apps incríveis para grandes clientes."
  
}  

const smallCard1 = {
  titulo: "Email:",
  texto: " future4code@gmail.com"
  
}  

const smallCard2 = {
  titulo: "Endereço:",
  texto: " Rua do Futuro, 4."
  
}  

const imageButton1 = {
  titulo: "Ver mais",
  img: "expand.svg",
}  

const imageButton2 = {
  titulo: "Facebook",
  img: "facebook.svg",
}  

function App() {
  return (
    <div className="App">
      <PageSection titulo={pageSection1.titulo} />
      <BigCard titulo={bigCard1.titulo}  texto={bigCard1.texto}/>
      <SmallCard titulo={smallCard1.titulo}  texto={smallCard1.texto}/>
      <SmallCard titulo={smallCard2.titulo}  texto={smallCard2.texto}/>
      <ImageButton titulo={imageButton1.titulo}  img={imageButton1.img}/>
      <PageSection titulo={pageSection2.titulo} />
      <BigCard titulo={bigCard2.titulo}  texto={bigCard2.texto}/>
      <BigCard titulo={bigCard3.titulo}  texto={bigCard3.texto}/>
      <PageSection titulo={pageSection3.titulo} />
      <ImageButton titulo={imageButton2.titulo}  img={imageButton2.img}/>
    </div>
  );
}

export default App;
