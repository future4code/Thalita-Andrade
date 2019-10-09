import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import TelaDeCadastro from './components/CompPais/TelaDeCadastro';

const ContainerApp = styled.div `
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items:center;
  background: orange;
`
 class App extends Component {
  render(){
    return (
      <ContainerApp>
        <TelaDeCadastro/>
      </ContainerApp>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;