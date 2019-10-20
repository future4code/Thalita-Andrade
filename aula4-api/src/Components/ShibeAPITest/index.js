import React from "react";
import axios from "axios";
import styled from "styled-components";

const DogPhotoGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const DogPhoto = styled.img `
    width: 100px;
`

class ShibeAPITest extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            dogPhotos: [],
        }
    }

    componentDidMount(){
        this.refreshDogs(); 
    }

    refreshDogs = () => {
        axios
            .get("http://shibe.online/api/shibes", {
                params: {
                    count: 10,
                }
            })
        .then(response => {
            this.setState({dogPhotos: response.data});
        })
        .catch(err => {
            alert(err)
        }); 
    }

    render() { 

        return (
            <div>
                <DogPhotoGrid>
                    {
                        this.state.dogPhotos.map((url) => {
                            return(<DogPhoto key={url} src={url}/>)
                        })
                    }
                </DogPhotoGrid>

                <button
                    onClick={this.refreshDogs}
                >
                    Carregar mais cães
                </button>
                    
            </div>
        )
    }
}

export default ShibeAPITest;