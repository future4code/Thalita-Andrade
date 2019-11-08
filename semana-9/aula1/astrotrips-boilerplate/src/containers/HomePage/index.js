import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";
import Button from '@material-ui/core/Button';

const ContainerButtonHome = styled.div `
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
    background: #dedede;
    width: 100vw;
    height: 100vh;
`
const ButtonHome = styled(Button)`
   width: 200px;
   height: 100px;
`

const MainButtonHome = styled.div `
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
`

const HomePage = props => {

    return (
        <ContainerButtonHome>
            <MainButtonHome>
                <ButtonHome  variant="contained" color="primary" onClick={props.goToLogin}> Login </ButtonHome>
                <ButtonHome  variant="contained" color="primary" onClick={props.goToRegistrationUserPage} > Inscreva-se </ButtonHome>
            </MainButtonHome>
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