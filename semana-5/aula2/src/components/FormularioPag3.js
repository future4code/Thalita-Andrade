import React from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input3 = styled.input`
    margin-top: 20px;
    width: 200px;
`

const Select3 = styled.select`
     margin-top: 20px;
    width: 200px;
`

const Button3 = styled.button`
    margin-top: 20px;
    border-radius:30px;
    width: 100px;
`

const Label3 = styled.label `
    margin-top: 20px;
`

class FormularioPag3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  render() {
    return (
      <div>
          <Form3>
            <h3>ETAPA 3: INFORMAÇÕES GERAIS DE ENSINO </h3>

            <Label3>Por que você não terminou um curso de graduação?</Label3>
            <Input3 
                name="naoGraduacao"
                type="number"
                value={}
                onChange={}
            />
        
            <Label3>Você fez algum curso complementar?</Label3>
            <Select3>
            <option >Selecione</option>
            <option value="cursoTec">Curso técnico</option>
            <option value="cursoIn">Curso de Inlês</option>
            <option value="nCurso">Não fiz nenhum curso complementar</option>
            </Select3>

            <Button3 onClick={}>Finalizar</Button3>

          </Form3>
      </div>
    );
  }
}
export default FormularioPag1;