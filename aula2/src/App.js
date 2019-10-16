import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import styled from 'styled-components'
import TelaDeCadastro from './components/TelaDeCadastro';
import TelaListaUsuario from './components/TelaListaUsuario';

const ContainerApp = styled.div `
  display: flex;
  align-items:center;
  flex-direction: column;
`

const ButtonListaVoltar = styled.button `
  width:10%;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      paginaAtual: "telaCadastro",
      textoButton: "Lista de Usuários"
    }
  }

  onClickButtonListaVoltar = () =>  {
    if(this.state.paginaAtual === "telaCadastro") {
      this.setState({
        paginaAtual: "listaUsuario",
        textoButton: "Voltar"
      })
    } else {
      this.setState({
        paginaAtual: "telaCadastro",
        textoButton: "Lista de Usuários"
      })
    }
  }

  render() {
 

    return(
      <ContainerApp>
        {
          this.state.paginaAtual === "telaCadastro" ? <TelaDeCadastro/> : <TelaListaUsuario/>
        }

        <ButtonListaVoltar onClick = {this.onClickButtonListaVoltar}>{this.state.textoButton}</ButtonListaVoltar>
      </ContainerApp>
    )
  }
}

render(<App />, document.getElementById('root'));

export default App;
