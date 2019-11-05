import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";

const HomePage = props => {

    return (
        <div>
            <button onClick={props.goToLogin}>Login</button>
            <button onClick={props.goToRegistrationUserPage}>Inscreva-se</button>
        </div>
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