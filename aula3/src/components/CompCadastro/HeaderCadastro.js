import React from 'react';
import styled from 'styled-components';

const ContainerHeaderCad = styled.div `
    display: flex;
    justify-content: center;
`

class HeaderCadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render(){
        return(
           <ContainerHeaderCad>
              <h3>Controlador de Gastos</h3> 
           </ContainerHeaderCad>
        );
    }
}

export default HeaderCadastro;