import React from "react";
import axios from "axios";
import styled from "styled-components";


const urlBase = "https://us-central1-spotif4.cloudfunctions.net/api";

class ListMusics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            musics: [] 
        }
    }

    getPlaylistMusics = (playlistId) => {
        axios.
            get(`${urlBase}/playlists/getPlaylistMusics/${playlistId}`,
            {
                headers: {
                    'auth': '59b24f3229f4bbf3c49cea1e9c5fc609'
                }
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        console.log(this.state.musics)
        const listMusicsPlaylist = this.state.musics.map(music => {
            const listAllMusics = () => {
                this.getPlaylistMusics(music.id);
            };  
            return<li onClick={listAllMusics}>{music.name}</li>
        })

        return(
            <div>
                <h3>Músicas da Playlist</h3>
                <ul>{listMusicsPlaylist}</ul>
            </div>
        )
    }
}

export default ListMusics;