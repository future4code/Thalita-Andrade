import React from "react";
import {connect} from "react-redux";
import { getTripDetail } from "../../actions";

class TripDetailsPage extends React.Component {

    componentDidMount() {
        this.props.buscarDetalhes()
    }

    render(){
        return (
            <div>
                <li>{this.props.detalhesViagem.name}</li>
            </div>
        );
    } 
}

function mapDispatchToProps (dispatch) {
    return {
        buscarDetalhes: (id) => dispatch(getTripDetail(id))
    }
}

function mapStateToProps (state) {
    return{
        detalhesViagem: state.trips.tripDetail
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(TripDetailsPage);