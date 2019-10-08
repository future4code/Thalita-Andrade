import React from "react";
import styled from "styled-components";

const Form2 = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input2 = styled.input`
    margin-top: 20px;
    width: 200px;
`

const Select2 = styled.select`
     margin-top: 20px;
    width: 200px;
`

const Button2 = styled.button`
    margin-top: 20px;
    border-radius:30px;
    width: 100px;
`

const Label2 = styled.label `
    margin-top: 20px;
`

class FormularioPag2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  render() {
    return (
      <div>
          <Form2>
            <h3>ETAPA 2: INFORMAÇÕES ENSINO SUPERIOR</h3>

            <Label2>Qual curso?</Label2>
            <Input2
                name="curso"
                type="text"
                value={}
                onChange={}
             />


            <Label2>Qual a unidade de ensino?</Label2>
            <Input2 
                name="unidadeEnsino"
                type="text"
                value={}
                onChange={}
            />

            <Button2 onClick={} >Finalizar</Button2>

          </Form2>
      </div>
    );
  }
}
export default FormularioPag2;