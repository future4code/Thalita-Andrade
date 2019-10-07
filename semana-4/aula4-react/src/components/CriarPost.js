import React, { Component } from 'react';
import styled from 'styled-components';


const ContainerFormulario = styled.div` 
  display:flex;
  flex-direction: column;
  align-items: center;
`

const Formulario = styled.div`
  display:flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  align-items: center;
  border: 1px solid black;
  justify-content: center;
`
const Button = styled.button`
  width: 50px;
  margin-top: 6px;
`

const Input = styled.input `
  margin-top: 3px;
  width: 200px;
`

const CadaPost = styled.li `
  width: 300px;
  height: 200px;
  align-items: center;
  border: 1px solid black;
  margin-top: 10px;
  list-style: none;
`

const TimeLinePost = styled.ul `
  display:flex;
  flex-direction: column;
` 

class CriarPost extends Component {

  constructor() {
    super();
    this.state = {
      valorNome: ' ',
      valorImage: ' ',
      valorUrl: ' ',
      listaDePost:[]
    }
  }

  criarPost = () => {
    
    const novoPost = {
      fotoUsuario: this.state.valorImage,
      nomeUsuario: this.state.valorNome,
      urlImg: this.state.valorUrl
    }

    const copiaListaDePost = [novoPost, ...this.state.listaDePost]

    this.setState({
      listaDePost: copiaListaDePost,
      valorNome: ' ',
      valorImage: ' ',
      valorUrl: ' '
    })
  }

  onChangeFotoUsuario = (event) => {
    this.setState({valorImage: event.target.value})
  }

  onChangeNomeUsuario = (event) => {
    this.setState({valorNome: event.target.value})
  }

  onChangeUrlImg = (event) => {
    this.setState({valorUrl: event.target.value})
  }
  
  render() {
    console.log(this.state)
    const listaTodosPost = this.state.listaDePost.map((post, index) => {
      return <CadaPost key={index} > {post.nomeUsuario + post.fotoUsuario + post.urlImg} 
      </CadaPost>
    })

    return (
      <ContainerFormulario>
          
        <Formulario>
            <h3>Criar um novo post</h3>
            <Input
              type="text" 
              placeholder="Foto do Usuário"
              value = {this.state.valorImage}
              onChange = {this.onChangeFotoUsuario}
            />
            <Input 
              type="text" 
              placeholder="Nome do Usuário"
              value = {this.state.valorNome}
              onChange = {this.onChangeNomeUsuario}
            />
            <Input 
              type="text" 
              placeholder="URL do Usuário"
              value = {this.state.valorUrl}
              onChange = {this.onChangeUrlImg}
            />

            <Button onClick={this.criarPost}>
              Enviar
            </Button>
        </Formulario>

        <TimeLinePost>
          {listaTodosPost}
        </TimeLinePost>

      </ContainerFormulario>
    );
  }
}



export default CriarPost;
