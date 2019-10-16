 
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const ContainerCadastro = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid;
    width: 400px;
    height: 150px;
    justify-content: space-around;
    align-items:center;
`
const InputName = styled.input `
    width: 60%;
`

const InputEmail = styled.input `
    width: 60%;
`
const ContainerInputsCadastro = styled.div `
    display: flex;
`

const ButtonSalvarCadastro = styled.button `
     width: 20%;
     background: #66a0fd;
     color: white;
`

class TelaDeCadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputNome: '',
            inputEmail: '',
        }
    }

    salvarAoClicar = () => {
   
        const data = {
          name: this.state.inputNome,
          email: this.state.inputEmail,
        }
        console.log(data)
        axios.post(
          "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",
          data,
          {
            headers: {
              "api-token": "59b24f3229f4bbf3c49cea1e9c5fc609"
            }
          }
        ).then(() => {
          window.alert("Usuário salvo com sucesso!")
        })
    }
    
    onChangeNome = (event) => {
      this.setState({inputNome: event.target.value})
    }
  
    onChangeEmail = (event) => {
      this.setState({inputEmail: event.target.value})
    }
  
    render() {

        return(
            <ContainerCadastro>

                <ContainerInputsCadastro>

                    <label htmlFor="nome">Nome:</label>

                    <InputName
                        id="nome"
                        type="text"
                        value={this.state.name}
                        onChange={this.onChangeNome}
                    />

                </ContainerInputsCadastro>

                <ContainerInputsCadastro>
                    
                    <label htmlFor="email">E-mail:</label>

                    <InputEmail
                        id="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />

                </ContainerInputsCadastro>
            

                <ButtonSalvarCadastro onClick={this.salvarAoClicar} >Salvar</ButtonSalvarCadastro>

            </ContainerCadastro>
        );
    }
}


export default TelaDeCadastro;
