import React from 'react'
import styled from 'styled-components';


const ContainerMainCad = styled.div `
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 10px;
`
const InputValorCad = styled.input `

`

const SelectValorCad = styled.select `
    margin-top: 10px;
`

const InputDescriCad = styled.input `
    margin-top: 10px;
`


class MainCadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render(){
        return(
            <ContainerMainCad>

                <InputValorCad 
                    type="number"
                    placeholder="Digite o valor"
                />

                <SelectValorCad>
                    <option>Selecione</option>
                    <option>Mercado</option>
                    <option>Lazer</option>
                    <option>Outros</option>
                </SelectValorCad> 

                <InputDescriCad 
                    type="text"
                    placeholder="Digite a descrição"
                />

            </ContainerMainCad>
        );
    }
}

export default MainCadastro;