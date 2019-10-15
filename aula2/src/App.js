import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import styled from 'styled-components'
import TelaDeCadastro from './components/TelaDeCadastro';

const ContainerApp = styled.div `
  display: flex;
  justify-content:center;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listaDeCadastro: [],
      inputNome: '',
      inputEmail: '',
    }
  }

    // urlBase: "https://us-central1-future4-users.cloudfunctions.net/api"
    // token: "59b24f3229f4bbf3c49cea1e9c5fc609"

  getAllUsers = () => {
 
    const request = axios.get(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
      {
        headers: {
          auth: "59b24f3229f4bbf3c49cea1e9c5fc609"
        }
      }
    );

    request
      .then(response => {
        console.log(response);
        this.setState({ listaDeCadastro: response.data.result.list });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMessage:
            "Ocorreu um erro! Atualize a página para tentar novamente!"
        });
      });
  };

  

  createUser = () => {

    const data = {
      nome: this.state.inputNome,
      email: this.state.inputEmail,
    };

    const request = axios.post(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",
      data,
      {
        headers: {
          auth: "59b24f3229f4bbf3c49cea1e9c5fc609"
        }
      }
    );

    request
      .then(response => {
        console.log(response);
        this.getAllUsers()
      })
      .catch(error => {
        console.log(error);
      });
  };


  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }


  render() {
    return(
      <ContainerApp>
        <TelaDeCadastro
          valorNome={this.state.inputNome}
          onChangeNome={this.onChangeNome}

          valorEmail={this.state.inputEmail}
          onChangeEmail={this.onChangeEmail}
        />
      </ContainerApp>
    )
  }
}

render(<App />, document.getElementById('root'));

export default App;
