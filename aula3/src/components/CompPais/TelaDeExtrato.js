import React from 'react';
import styled from 'styled-components';
import HeaderExtrato from '../CompExtrato/HeaderExtrato';
import MainExtrato from '../CompExtrato/MainExtrato';
import ListaExtrato from '../CompExtrato/ListaExtrato';

const ContainerTelaExtrato = styled.div `
    width: 500px;
    border:1px solid black;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    height: 300px;
    background: white;
`

class TelaDeExtrato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render(){
        return(
           <ContainerTelaExtrato>
               <HeaderExtrato/>
               <MainExtrato/>
               <ListaExtrato/>
           </ContainerTelaExtrato>
        );
    }
}

export default TelaDeExtrato;


