import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';


const ContainerListaUsuario = styled.div `
    display:flex;
    flex-direction: column;
`
const ItemUsuario = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const Deletar = styled.div `
    color: red;
`
class TelaListaUsuario extends React .Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDeCadastrados: [],
            errorMessage: undefined,
        }
    }


    getAllUsers = () => {
        axios
        .get("https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
            {
                headers: {
                    "api-token": "59b24f3229f4bbf3c49cea1e9c5fc609"
                }
            }
        ).then((res) => {
            this.setState({
                listaDeCadastrados: res.data.result
            })
            console.log(res.data)
        })
        .catch(error => {
            console.log(error);
            this.setState({
                errorMessage:
                "Ocorreu um erro! Atualize a página para tentar novamente!"
            });
        });
    }
       

    componentDidMount() {
      this.getAllUsers()
    }

    deletarUsuario = (id) => {
        axios
            .delete(`https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${id}`,
                {
                    headers: {
                        "api-token": "59b24f3229f4bbf3c49cea1e9c5fc609"
                    }
                }
            )
            .then(() => {
                this.getAllUsers()
            })
    }

    render() {
    
        return (

            <ContainerListaUsuario>
                <h3>Usuários Cadastrados</h3>

                {
                    this.state.listaDeCadastrados.map((usuario, i) => {
                        return (
                            <ItemUsuario key={ i }>
                                <p>{ usuario.name }</p>
                                <Deletar onClick = { () => {this.deletarUsuario(usuario.id)}}> X </Deletar>
                            </ItemUsuario>
                        )
                    })
                }
            </ContainerListaUsuario>
        );
    }
}


export default TelaListaUsuario;