import React from "react";
import {connect} from "react-redux";

class TripDetailsPage extends React.Component {

    render(){
        return (
            <div>
                <li>{this.props.detalhesViagem.name}</li>
            </div>
        );
    } 
}

function mapStateToProps (state) {
    return{
        detalhesViagem: state.trips.tripDetail
    }
}

export default connect(
    mapStateToProps, 
    null
    )(TripDetailsPage);