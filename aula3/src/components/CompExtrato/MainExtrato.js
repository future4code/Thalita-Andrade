import React from 'react';
import styled from 'styled-components';

const ContainerMainExt = styled.div `
   margin-left: 10px;
`

const FiltroDespesas = styled.div `
    display: flex;
    align-items: center;
`

const SelecaoFiltroExt = styled.select `
    margin-left: 10px;
`
const ButtonVoltar = styled.button `
    margin-top: 30px;
`

class MainExtrato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render(){
        return(
           <ContainerMainExt>

               <h4>Valor Total Gasto:</h4>

               <FiltroDespesas>
                   <h4>Filtrar Despesas:</h4>
                    <SelecaoFiltroExt>
                        <option>Selecione</option>
                        <option>Maior valor</option>
                        <option>Menor valor</option>
                        <option>Tipo de gasto</option>
                    </SelecaoFiltroExt>
               </FiltroDespesas>

               <ButtonVoltar>Voltar</ButtonVoltar>
           </ContainerMainExt>
        );
    }
}

export default MainExtrato;