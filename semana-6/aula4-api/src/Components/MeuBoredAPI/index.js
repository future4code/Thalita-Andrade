import React from "react";
import axios from "axios";
import styled from "styled-components";


const baseURL = "http://www.boredapi.com/api/"

class MeuBoredAPITest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTypes: ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"],
            currentSelectedType: '',
            retrievedActivity: '',
        };
    }

    fetchAllTypes = async () => {
        const typesRequestConfig = {
            params: {
                type: this.state.currentSelectedType,
            }
        }
        const response = await axios.get(`${baseURL}activity`, typesRequestConfig)
        this.setState({ allTypes: response.data.activity });
    }

    componentDidMount() {
        // this.fetchAllTypes();
    }

    handleTypeSelection = (event) => {
        const selectedValue = event.target.value;
        this.setState({ currentSelectedType: selectedValue })
    }

    fetchSelectedActivity = async () => {
        const response = await axios.get(this.state.currentSelectedType);
        this.setState({ retrievedActivity: response.data.activity })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentSelectedType !== this.state.currentSelectedType) {
            this.fetchSelectedActivity();
        }
    }

    render() {
        console.log(this.state.allTypes)
        return (
            <div>
                <select
                    onChange={this.handleTypeSelection}
                    value={this.state.currentSelectedType}
                >
                    <option> Escolha o tipo de atividade</option>

                    {this.state.allTypes.map((activity) => {
                        return (
                            <option key={activity}
                                value={activity}
                            >
                                {activity}
                            </option>
                        )
                    })}
                </select>

                {
                    this.state.fetchSelectedActivity && (
                        <h1>{this.state.fetchSelectedActivity}</h1>
                    )
                }
            </div>
        )
    }
}

export default MeuBoredAPITest;