import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";

class AdminPage extends React.Component {

    componentDidMount() {
        const token = window.localStorage.getItem("token");

        if (!token) {
            this.props.goToLogin();
        }
    }
   
    render() {
        return (
            <div>
                <button onClick={this.props.goToCreateTripPage}>Criar novas viagem</button>
                <button onClick={this.props.goToListTripsPage}>Todas as viagens</button>
                <button onClick={this.props.goToApprovedListPage}>Lista de Inscrições</button>
            </div>
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