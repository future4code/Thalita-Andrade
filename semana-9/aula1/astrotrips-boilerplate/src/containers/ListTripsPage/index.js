import React from "react";
import {connect} from "react-redux";
import { getTrips } from "../../actions";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { getTripDetail } from "../../actions";
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";

const ContainerListTrips = styled.div `
    background: #dedede;
`
const MainListTrips = styled(Paper) `
    width: 300px;
    height: 350px;
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-items:center;
    justify-content: space-between;
    padding: 10px;
`
const ItemListTrips = styled.div `
    display: flex; 
    align-items: center;
`

class ListTripsPage extends React.Component {

    componentDidMount() {
        this.props.buscarViagens()
    }

    render() {
        return (
            <div>
                {
                    this.props.listaDeViagens.map((viagem) => {
                        return(
                            <ContainerListTrips>
                                <MainListTrips>
                                    <ItemListTrips> <h4>Nome:</h4> {viagem.name} </ItemListTrips>
                                    <ItemListTrips> <h4>Planeta:</h4>{viagem.planet}</ItemListTrips>
                                    <ItemListTrips> <h4>Data:</h4>{viagem.date}</ItemListTrips>
                                    <ItemListTrips> <h4>Descrição:</h4>{viagem.description}</ItemListTrips>
                                    <ItemListTrips> <h4>Duração:</h4>{viagem.durationInDays}</ItemListTrips>
                                    <button onClick={() => this.props.goToDetailsPage(viagem.id)}
                                    >Mais Detalhes
                                    </button>
                                </MainListTrips>
                            </ContainerListTrips>
                            )
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