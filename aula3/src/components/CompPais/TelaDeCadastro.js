import React from 'react';
import styled from 'styled-components';
import HeaderCadastro from '../CompCadastro/HeaderCadastro';
import MainCadastro from '../CompCadastro/MainCadastro'
import BotoesCadastro from '../CompCadastro/BotoesCadastro';

const ContainerTelaCadastro = styled.div `
    width: 500px;
    border:1px solid black;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    align-items: center;
    background: white;
`
class TelaDeCadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render(){
        return(
           <ContainerTelaCadastro>
                <HeaderCadastro/>
                
                <MainCadastro salvarDespesa={this.props.salvarDespesa}/>
                
                
           </ContainerTelaCadastro>
        );
    }
}

export default TelaDeCadastro;

