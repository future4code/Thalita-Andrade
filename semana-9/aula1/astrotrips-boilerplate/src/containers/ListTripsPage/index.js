import React from "react";
import {connect} from "react-redux";
import { getTrips } from "../../actions";
import { routes } from "../Router";
import { push } from "connected-react-router";

class ListTripsPage extends React.Component {

    componentDidMount() {
        this.props.buscarViagens()
    }

    render() {
        return (
            <div>
                {
                    this.props.listaDeViagens.map((viagem) => {
                        return(<li>{viagem.name} <button onClick={this.props.goToDetailsPage}>Mais Detalhes</button></li>)
                    })
                }
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        buscarViagens: () => dispatch(getTrips()),
        goToDetailsPage: () => dispatch(push(routes.tripDetailsPage)) 
    }
}

function mapStateToProps (state) {
    return {
        listaDeViagens: state.trips.trips
    }
}

export default connect( 
    mapStateToProps, 
    mapDispatchToProps
    )(ListTripsPage);