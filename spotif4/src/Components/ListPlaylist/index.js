import React from "react";
import axios from "axios";
import styled from "styled-components";
import ListMusics from "../ListMusics/ListMusics";

const ContainerListPlaylist = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 350px;
    border: 1px solid;
    margin-top: 10px;
`

const ItemList = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Delete = styled.p `
    color: red;
`

const ContainerItem = styled.div `
    display: flex;
    flex-direction:column;
`


const urlBase = "https://us-central1-spotif4.cloudfunctions.net/api";



class ListPlaylist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playlist: []
        }
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        axios
            .get(`${urlBase}/playlists/getAllPlaylists`,{
                headers: {
                    'auth': '59b24f3229f4bbf3c49cea1e9c5fc609'
                }
            })

                .then((response) => {
                    this.setState({playlist: response.data.result.list})
                })
                .catch((error) => {
                    console.log(error)
                })    
    }

    deletePlaylist = (id) => {
        axios
            .delete(`${urlBase}/playlists/deletePlaylist?playlistId=${id}`,
                {
                    headers: {
                        "auth": "59b24f3229f4bbf3c49cea1e9c5fc609"
                    }
                }
            )
            .then(() => {
                this.getPlaylists()
            })
    }


    render() {
       
        return(
            <ContainerListPlaylist>

                    <h3>Lista De Playlist</h3>

                    <ContainerItem>

                      {
                        this.state.playlist.map((onePlaylist, i) => {
                            return (
                                <ItemList key={ i }>
                                    <p>{ onePlaylist.name }</p>
                                    <Delete onClick = { () => {this.deletePlaylist(onePlaylist.id)}}> X </Delete>
                                </ItemList>
                            )
                        })
                      }

                    </ContainerItem>

                    {/* <ListMusics/> */}
   
            </ContainerListPlaylist>
        )
    }
}

export default ListPlaylist;