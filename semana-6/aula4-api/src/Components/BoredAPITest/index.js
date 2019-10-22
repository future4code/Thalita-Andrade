import React from "react";
import axios from "axios";
import styled from "styled-components";

class BoredAPITest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPric: 0,
            currentParticipantsNumber: 1,
            retrievedActivity: '',
        }
    }

    handleOnChangeParticipantsCount = (event) => {
        const newValue = Number(event.target.value);
        this.setState({ currentParticipantsNumber: newValue })
    }

    handleOnChangePrince = (event) => {
        const newValue = Number(event.target.value);
        this.setState({ currentPrice: newValue})
    }

    fetchActivity = () => {
        axios.get('http://www.boredapi.com/api/activity', {
            params: {
                maxprice: this.state.currentPrice,
                minprince: 0,
                participants: this.state.currentParticipantsNumber,
            }
        }).then((response) => {
                this.setState({ retrievedActivity: response.data.activity})
        })
    }

    render() {
        return (
            <div>
                <input
                    name="price"
                    type="number"
                    value={this.state.currentPrice}
                    onChange={this.handleOnChangePrince}
                />

                <input
                    name="participantsCount"
                    type="number"
                    value={this.state.currentParticipantsNumber}
                    onChange={this.handleOnChangeParticipantsCount}
                />

                <button onClick={this.fetchActivity}>Busca Atividade!</button>

                {
                    this.state.retrievedActivity && (
                        <h1>{this.state.retrievedActivity}</h1>
                    )
                }
             </div>
        )
    }

}

export default BoredAPITest;