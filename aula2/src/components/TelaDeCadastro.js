 
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerCadastro = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid;
    width: 400px;
    height: 150px;
    justify-content: space-around;
    align-items:center;
`
const InputName = styled.input `
    width: 60%;
`

const InputEmail = styled.input `
    width: 60%;
`
const ContainerInputsCadastro = styled.div `
    display: flex;
`

const ButtonSalvarCadastro = styled.button `
     width: 20%;
     background: #66a0fd;
     color: white;
`

const TelaDeCadastro = (props) => {


    return(
        <ContainerCadastro>

            <ContainerInputsCadastro>

                <label htmlFor="nome">Nome:</label>

                <InputName
                    id="nome"
                    type="text"
                    value = {props.inputNome}
                    onChange={props.onChangeNome}
                />

            </ContainerInputsCadastro>

            <ContainerInputsCadastro>
                
                <label htmlFor="email">E-mail:</label>

                <InputEmail
                    id="email"
                    type="email"
                    value = {props.valorEmail}
                    onChange={props.onChangeEmail}
                />

            </ContainerInputsCadastro>
          

            <ButtonSalvarCadastro>Salvar</ButtonSalvarCadastro>

        </ContainerCadastro>
    );
}

TelaDeCadastro.propTypes = {
    inputNome: PropTypes.func.isRequired,
    onChangeNome: PropTypes.func.isRequired,

    InputEmail: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,

}

export default TelaDeCadastro;
