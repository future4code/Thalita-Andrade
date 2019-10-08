import React from "react";
import styled from "styled-components";

const PagFinal = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Finalizar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  render() {
    return (
      <PagFinal>
          <h3>Formulário finalizado!</h3>
          <p>Muito Obrigado por participar.</p>
          <p>Entraremos em contato.</p>
      </PagFinal>
    );
  }
}
export default Finalizar;