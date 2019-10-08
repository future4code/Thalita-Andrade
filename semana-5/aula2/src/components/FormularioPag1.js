import React from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    margin-top: 20px;
    width: 200px;
`

const Select = styled.select`
     margin-top: 20px;
    width: 200px;
`

const Button = styled.button`
    margin-top: 20px;
    border-radius:30px;
    width: 100px;
`

const Label = styled.label `
    margin-top: 20px;
`

class FormularioPag1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      email: '',
      ensinoMC: '',
      ensinoMI: '',
      ensinoSC: '',
      ensinoSI: '',
    };
  }

  onChangeInputNome = (event) => {
    this.setState({nome: event.target.value})
  }

  onChangeInputIdade = (event) => {
    this.setState({idade: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({email: event.target.value})
  }

  onClickButtonForm1 = (event) => {

  }


  render() {
    return (
      <div>
          <Form>
            <h3>ETAPA 1: DADOS GERAIS</h3>

            <Label>Qual é o seu nome?</Label>

            <Input 
              name="nome"
              type="text"
              value={this.state.nome}
              onChange={this.onChangeInputNome}
            />

            <Label>Qual é a sua idade?</Label>

            <Input 
              name="idade"
              type="number"
              value={this.state.idade}
              onChange={this.onChangeInputIdade}
            />

            <Label>Qual é o seu email?</Label>

            <Input 
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChangeInputEmail}
            />
        
            <Label>Qual é a sua escolaridade?</Label>
            <Select>
            <option>Selecione</option>
            <option value={this.state.ensinoMC} >Ensino Médio Completo</option>
            <option value={this.state.ensinoMI}>Ensino Médio Incompleto</option>
            <option value={this.state.ensinoSC}>Ensino Superior Completo</option>
            <option value={this.state.ensinoSI}>Ensino Superior Incompleto</option>
            </Select>

            <Button onClick={this.onClickButtonForm1} >Continuar</Button>

          </Form>
      </div>
    );
  }
}
export default FormularioPag1;