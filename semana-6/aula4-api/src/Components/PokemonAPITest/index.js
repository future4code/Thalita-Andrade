import React from "react";
import axios from "axios";
import styled from "styled-components";

const baseURL = "https://pokeapi.co/api/v2/"

class PokemonAPITest extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            allPokemons: [],
            currentSelectedPokemon: '',
            currentSelectedPokemonPhoto: '',
        };
    }

    fetchAllPokemons = async () => {
        const pokemonsRequestConfig = {
            params: {
                limit: 150,
            }
        }
        const response = await axios.get(`${baseURL}pokemon`, pokemonsRequestConfig)
        this.setState({allPokemons: response.data.results});
    }

    componentDidMount(){
        this.fetchAllPokemons();
    }

    handlePokemonSelection = (event) => {
        const selectedValue = event.target.value;
        this.setState({ currentSelectedPokemon: selectedValue });
    }

    fetchSelectedPokemonPhoto = async () => {
        const response  = await axios.get(this.state.currentSelectedPokemon);
        this.setState({currentSelectedPokemonPhoto: response.data.sprites.front_default})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.currentSelectedPokemon !== this.state.currentSelectedPokemon) {
            this.fetchSelectedPokemonPhoto();
        }
    }

    render() {
        return(
            <div>
                <select
                    onChange={this.handlePokemonSelection}
                    value={this.state.currentSelectedPokemon}
                >

                    <option>Escolha o Pokemon</option>

                    {this.state.allPokemons.map((pokemon) => {
                        return (
                            <option 
                                key = {pokemon.name}
                                value = {pokemon.url}
                            > 
                                {pokemon.name}
                            </option>
                        )
                    })}
                </select>
                {
                    this.state.currentSelectedPokemonPhoto && ( 
                        <img src={this.state.currentSelectedPokemonPhoto}/>
                    )
                }
            </div>
        )
    }
}

export default PokemonAPITest;

