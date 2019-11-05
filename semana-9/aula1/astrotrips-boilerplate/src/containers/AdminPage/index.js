import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";

const AdminPage = props => {

    return (
        <div>
            <button onClick={props.goToCreateTripPage}>Criar novas viagem</button>
            <button onClick={props.goToListTripsPage}>Todas as viagens</button>
            <button onClick={props.goToApprovedListPage}>Lista de Inscrições</button>
        </div>
    );
}

function mapDispatchToProps (dispatch) {
    return {
        goToCreateTripPage: () => dispatch(push(routes.createTripPage)),
        goToListTripsPage: () => dispatch(push(routes.listTripPage)), 
        goToApprovedListPage: () => dispatch(push(routes.approvedListPage))
    }
}

export default connect(null, mapDispatchToProps )(AdminPage);