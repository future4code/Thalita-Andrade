import React from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    margin-top: 20px
    width: 200px;
`

const Select = styled.select`
     margin-top: 20px
    width: 200px;
`

const Button = styled.button`
    margin-top: 20px
    border-radius:30px;
    width: 100px;
`

const Label = styled.label `
    margin-top: 20px;
`

class Formulario extends React.Component {
  constructor() {
    super();
    this.state = {
   
    };
  }

  render() {
    return (
      <div>
          <Form>
            <h3>ETAPA 1: DADOS GERAIS</h3>

            <Label>Qual é o seu nome?</Label>
            <Input type="text"/>

            <Label>Qual é a sua idade?</Label>
            <Input type="number"/>

            <Label>Qual é o seu email?</Label>
            <Input type="email"/>
        
            <Label>Qual é a sua escolaridade?</Label>
            <Select>
            <option>Selecione</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Superior Completo</option>
            <option>Ensino Superior Incompleto</option>
            </Select>

            <Button>Continuar</Button>

          </Form>
      </div>
    );
  }
}
export default Formulario;