import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import styled from 'styled-components'
import TelaDeCadastro from './components/TelaDeCadastro';
import TelaListaUsuario from './components/TelaListaUsuario';

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
      errorMessage: undefined,
    }
  }

  getAllUsers = () => {
 
    const request = axios.get(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
      {
        headers: {
          "api-token": "59b24f3229f4bbf3c49cea1e9c5fc609"
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


  // getUser = userId => {
  //   const request = axios.get(
  //     "https://us-central1-future4-users.cloudfunctions.net/api/users/getUser/${userId}",
  //     {
  //       headers: {
  //         "api-token":  "59b24f3229f4bbf3c49cea1e9c5fc609"
  //       }
  //     }
  //   );

  //   request
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };


  

  createUser = () => {

    const data = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    const request = axios.post(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",
      data,
      {
        headers: {
          "api-token": "59b24f3229f4bbf3c49cea1e9c5fc609"
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

  //  gerarListaDeCadastrados() {
  //       const listaDeCadastrados = this.state.listaDeCadastro.map(
  //           (cadaCadastro) => {
  //             const funcaoIntermediaria = () => {
  //               this.getUser(cadaCadastro.id);
  //             };
  //             return <li onClick={funcaoIntermediaria}>{cadaCadastro.name}</li>;
  //           });
  //         return listaDeCadastrados
  //       }

  render() {

    // const listaDeCadastrados = this.gerarListaDeCadastrados() 

    return(
      <ContainerApp>
        <TelaDeCadastro
          valorNome={this.state.inputNome}
          onChangeNome={this.onChangeNome}

          valorEmail={this.state.inputEmail}
          onChangeEmail={this.onChangeEmail}

          createUser={this.createUser}
        />

        <TelaListaUsuario
        />
      </ContainerApp>
    )
  }
}


    // urlBase: "https://us-central1-future4-users.cloudfunctions.net/api"
    // token: "59b24f3229f4bbf3c49cea1e9c5fc609"

render(<App />, document.getElementById('root'));

export default App;
