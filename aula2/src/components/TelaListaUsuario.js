import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

class TelaListaUsuario extends Component {


    render() {
       
   
        return (

            <div>
                <h3>Nomes Cadastrados</h3>
                {/* <ul>{this.props.listaDeCadastrados}</ul> */}
            </div>
        );
    }
}

TelaListaUsuario.propTypes = {
    // listaDeCadastrados: PropTypes.func.isRequired,
}

export default TelaListaUsuario;