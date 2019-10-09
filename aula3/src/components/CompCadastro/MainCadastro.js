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
            inputValorCad: "",
            inputDescCad: "",
            selectCad: "",
        };
    }

    atualizarInputValorC = (event) => {
        this.setState({inputValorCad: event.target.value})
    }

    atualizarInputDescrC = (event) => {
        this.setState({inputDescrCad: event.target.value})
    }

    atualizarselectCad = (event) => {
        this.setState({selectCad: event.target.value})
    }


    render(){
        return(
            <ContainerMainCad>

                <InputValorCad 
                    type="number"
                    placeholder="Digite o valor"
                    value={this.state.inputValorCad}
                    onChange={this.atualizarInputValorC}
                />

                <SelectValorCad
                    value={this.state.selectCad}
                    onChange={this.atualizarselectCad}
                >
                    <option value="">Selecione</option>
                    <option value="mercado">Mercado</option>
                    <option value="lazer">Lazer</option>
                    <option value="outros">Outros</option>
                </SelectValorCad> 

                <InputDescriCad 
                    type="text"
                    placeholder="Digite a descrição"
                    value={this.state.inputDescrCad}
                    onChange={this.atualizarInputDescrC}
                />

            </ContainerMainCad>
        );
    }
}

export default MainCadastro;