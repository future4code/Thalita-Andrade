import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";
import Button from '@material-ui/core/Button';

const ContainerButtonHome = styled.div `
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    align-items: center;
    background: #dedede;
    width: 100vw;
    height: 100vh;
`
const ButtonHome = styled(Button)`
   width: 200px;
   height: 100px;
   background: #0062cc;
`




const HomePage = props => {

    return (
        <ContainerButtonHome>
            <div>
                <ButtonHome   variant="contained" onClick={props.goToLogin}> Login </ButtonHome>
                <ButtonHome  variant="contained"  onClick={props.goToRegistrationUserPage} > Inscreva-se </ButtonHome>
            </div>
        </ContainerButtonHome>
    );
}

function mapDispatchToProps (dispatch) {
    return {
        goToRegistrationUserPage: () => dispatch(push(routes.registrationUserPage)),
        goToLogin: () => dispatch(push(routes.login)) 
    }
}

export default connect(
    null,
    mapDispatchToProps
    )(HomePage);