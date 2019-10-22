import React from 'react';
import styled from 'styled-components';

const ContainerHeaderExt = styled.div `
   display: flex;
   justify-content: center;
`

class HeaderExtrato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render(){
        return(
           <ContainerHeaderExt>
               <h3>Extrato</h3>
           </ContainerHeaderExt>
        );
    }
}

export default HeaderExtrato;