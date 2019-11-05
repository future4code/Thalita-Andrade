import React from "react";
import {connect} from "react-redux";
import { getTrips } from "../../actions";

class ListTripsPage extends React.Component {

    componentDidMount() {
        this.props.buscarViagens()
    }

    render() {
        return (
            <div>
                {
                    this.props.listaDeViagens.map((viagem) => {
                        return(<li>{viagem.name}</li>)
                    })
                }
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        buscarViagens: () => dispatch(getTrips()),
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