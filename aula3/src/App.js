import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import TelaDeCadastro from './components/CompPais/TelaDeCadastro';
import TelaDeExtrato from './components/CompPais/TelaDeExtrato';

const ContainerApp = styled.div `
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items:center;
  background: orange;
`
 class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listaDeDespesas: [],
    }
  }

  salvarDespesa = (novaDespesa) => {
    const copiaListaDespesas = [novaDespesa, ...this.state.listaDeDespesas]
    
    this.setState({listaDeDespesas: copiaListaDespesas})
  }

  render(){
    return (
      <ContainerApp>
        <TelaDeCadastro salvarDespesa={this.salvarDespesa}/>
        <TelaDeExtrato/>
      </ContainerApp>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;