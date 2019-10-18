import React from 'react';
import styled from "styled-components"
import CriarPlaylist from './Components/CriarPlaylist';
import ListPlaylist from './Components/ListPlaylist';

const ContainerApp =styled.div `
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`
const ButtonPage = styled.button `
  margin-top: 10px;
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "criarPlaylist",
      textButton: "Playlists",
    }
  }

  onClickButtonPage = () => {
    if(this.state.currentPage === "criarPlaylist") {
      this.setState ({
        currentPage: "playlists",
        textButton: "Criar Playlist"
      })
    }
    else{
      this.setState({
        currentPage: "criarPlaylist",
        textButton: "Playlists"
      })
    }
  }

  render() {
    return (
      <ContainerApp>
        {
          this.state.currentPage === "criarPlaylist" ? <CriarPlaylist/> : <ListPlaylist/>
        }

        <ButtonPage onClick={this.onClickButtonPage}>{this.state.textButton}</ButtonPage>
        
     
      </ContainerApp>
    );
  }
}



export default App;
