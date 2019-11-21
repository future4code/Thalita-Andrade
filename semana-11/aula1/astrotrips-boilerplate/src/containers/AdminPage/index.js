import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";
import Button from '@material-ui/core/Button';

const ContainerAdmin = styled.div `
    background: #dedede;
    width: 100vw;
    height: 100vh;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
`

const MainAdmin = styled.div `
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;

`

const ButtonAdmin = styled(Button) `
    width: 200px;
    height: 100px;
`

class AdminPage extends React.Component {

    componentDidMount() {
        const token = window.localStorage.getItem("token");

        if (!token) {
            this.props.goToLogin();
        }
    }
   
    render() {
        return (
            <ContainerAdmin>
                <MainAdmin>
                <ButtonAdmin 
                    variant="contained" 
                    color="primary" 
                    onClick={this.props.goToCreateTripPage}
                    > Criar novas viagem
                </ButtonAdmin>

                <ButtonAdmin 
                    variant="contained" 
                    color="primary" 
                    onClick={this.props.goToListTripsPage}
                    >Todas as viagens
                </ButtonAdmin>

                <ButtonAdmin 
                    variant="contained" 
                    color="primary"
                    onClick={this.props.goToApprovedListPage}
                    >Lista de Inscrições
                </ButtonAdmin>
                </MainAdmin>
            </ContainerAdmin>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        goToLogin: () => dispatch(push(routes.login)),
        goToCreateTripPage: () => dispatch(push(routes.createTripPage)),
        goToListTripsPage: () => dispatch(push(routes.listTripPage)), 
        goToApprovedListPage: () => dispatch(push(routes.approvedListPage))
    }
}

export default connect(null, mapDispatchToProps )(AdminPage);