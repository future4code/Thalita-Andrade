import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerPlaylist = styled.div `

`
const ContainerCriarPlaylist = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 350px;
    border: 1px solid;
`
const ButtonCreatePlaylist = styled.button `
    margin-top: 10px;
    margin-bottom: 10px;
    
`


const urlBase = "https://us-central1-spotif4.cloudfunctions.net/api";



class CriarPlaylist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playlistNameValue: '',
        }
    }

    addNewPlaylist = () => {

        const data = {
            name: this.state.playlistNameValue,
        }

        const request = axios
            .post(`${urlBase}/playlists/createPlaylist`, 
            data, {
                headers: {
                    'auth': '59b24f3229f4bbf3c49cea1e9c5fc609'
                }
            })
            request
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error)
                })      
    }   

    onChangePlaylistName = (event) => {
        this.setState({playlistNameValue: event.target.value})
    }


    render() {
     
        return(
            <ContainerPlaylist>

                <ContainerCriarPlaylist>

                    <h3>Spotif4</h3>

                    <input
                        type="test"
                        value={this.state.playlistNameValue}
                        onChange={this.onChangePlaylistName}
                    />

                    <ButtonCreatePlaylist 
                        onClick={this.addNewPlaylist}
                    >
                        Criar Nova Playlist
                    </ButtonCreatePlaylist>

                </ContainerCriarPlaylist>

            </ContainerPlaylist>
        )
    }
}

export default CriarPlaylist;