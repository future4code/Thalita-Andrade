import React from "react";
import {connect} from "react-redux";
import { getTrips } from "../../actions";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { getTripDetail } from "../../actions";

class ListTripsPage extends React.Component {

    componentDidMount() {
        this.props.buscarViagens()
    }

    render() {
        return (
            <div>
                {
                    this.props.listaDeViagens.map((viagem) => {
                        return(<li>{viagem.name} <button onClick={() => this.props.goToDetailsPage(viagem.id)}>Mais Detalhes</button></li>)
                    })
                }
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        buscarViagens: () => dispatch(getTrips()),
        goToDetailsPage: (id) => {
            dispatch(getTripDetail(id))
            dispatch(push(routes.tripDetailsPage))
        }
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