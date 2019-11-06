import React from "react";
import styled from "styled-components"

const FormCreateTrip = styled.form `
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
    justify-items: center;
    align-items: center;
`

class CreateTripPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            valueName: "",
            valueDate: "",
            valueDescription: "",
            valueDuration: "",
        }
    }

    onChangeValueName = (event) => {
        this.setState({valueName: event.target.value})
    }

    onChangeValueDate = (event) => {
        this.setState({valueDate: event.target.value})
    }

    onChangeValueDescription = (event) => {
        this.setState({valueDescription: event.target.value})
    }

    onChangeValueDuration = (event) => {
        this.setState({valueDuration: event.target.value})
    }

    handleSubmit = event =>{
        event.preventDefault();
        alert("Validado com sucesso!")
    }

    render() {
        return (
            <FormCreateTrip onSubmit={this.handleSubmit}>
    
                <input
                    value={this.state.valueName}
                    onChange={this.onChangeValueName}
                    required
                    name="name"
                    pattern="^[a-zA-Z]{5,}"
                    type="text"
                    title="O nome precisa ter no mínimo 5 letras"
                    placeholder="Nome"
                />
    
                <select name="planet" required>
                    <option value="">Selecione o planeta</option>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Júpiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                </select>
    
                <input
                    value={this.state.valueDate}
                    onChange={this.onChangeValueDate}
                    required
                    name="date"
                    type="date"
                    min="01/01/2020"
                    title="Somente datas futuras"
                />
    
                <input
                    value={this.state.valueDescription}
                    onChange={this.onChangeValueDescription}
                    required
                    name="description"
                    type="textarea"
                    pattern="^[a-zA-Z]{30,}"
                    title="A descrição deve ter no mínimo 30 letras"
                    placeholder="Descrição"
                />
    
                <input
                    value={this.state.valueDuration}
                    onChange={this.onChangeValueDuration}
                    required
                    name="durationInDays"
                    type="number"
                    min="50"
                    title="A duração deve ser no mínimo 50 dias "
                    placeholder="Duração"
                />
    
                <button>Criar Viagem</button>
            </FormCreateTrip>
        );
    } 
}



export default CreateTripPage;