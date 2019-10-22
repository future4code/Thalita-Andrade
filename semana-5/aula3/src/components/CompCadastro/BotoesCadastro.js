import React from 'react';
import styled from 'styled-components';

const ContainerBotoesCad = styled.div `
    display: flex;
    flex-direction: column;
    align-items:center;
`
const BotaoSalvar = styled.button `
    width: 80px;
    margin-left: 10px;
    margin-top: 10px;   
`
const BotaoExtrato = styled.button `
    width: 60px;
    margin-left: 10px;
    margin-top: 10px;
`


class BotoesCadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }





    render(){
        return(
           <ContainerBotoesCad>
                <BotaoSalvar onClick={this.props.salvarDespesa}>
                    Salvar
                </BotaoSalvar>

                <BotaoExtrato>
                    Extrato
                </BotaoExtrato>
           </ContainerBotoesCad>
        );
    }
}

export default BotoesCadastro;