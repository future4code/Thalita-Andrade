import React from "react";
import {connect} from "react-redux";
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";

const ContainerListDetail = styled.div `
    background: #dedede;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MainListDetail = styled(Paper) `
    width: 300px;
    height: 350px;
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-items:center;
    justify-content: space-between;
    padding: 10px;
`
const ItemListDetail = styled.div `
    display: flex; 
    align-items: center;
`


class TripDetailsPage extends React.Component {

    render(){
        return (
            <ContainerListDetail>
                <MainListDetail>  
                    <ItemListDetail><h3>Id: </h3> {this.props.detalhesViagem.id}</ItemListDetail>
                    <ItemListDetail><h3>Planeta:</h3> {this.props.detalhesViagem.planet}</ItemListDetail>
                    <ItemListDetail><h3>Duração:</h3>  {this.props.detalhesViagem.durationInDays}</ItemListDetail>
                    <ItemListDetail><h3>Descrição: </h3> {this.props.detalhesViagem.description}</ItemListDetail>
                    <ItemListDetail><h3>Candidatos:</h3> {this.props.detalhesViagem.candidates}</ItemListDetail>
                </MainListDetail>
            </ContainerListDetail>
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