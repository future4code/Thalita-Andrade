import React from "react";

class CreateTripPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {

        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        alert("Validado com sucesso!")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
    
                <input
                    required
                    name="name"
                    pattern="^[a-zA-Z]{5,}"
                    type="text"
                    title="O nome precisa ter no mínimo 5 letras"
                    placeholder="Nome"
                />
    
                <select name="planet">
                    <option>Selecione o planeta</option>
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
                    required
                    name="date"
                    type="date"
                    min="01/01/2020"
                    title="Somente datas futuras"
                />
    
                <input
                    required
                    name="description"
                    type="textarea"
                    pattern="^[a-zA-Z]{30,}"
                    title="A descrição deve ter no mínimo 30 letras"
                    placeholder="Descrição"
                />
    
                <input
                    required
                    name="durationInDays"
                    type="number"
                    min="50"
                    title="A duração deve ser no mínimo 50 dias "
                    placeholder="Duração"
                />
    
                <button>Criar Viagem</button>
            </form>
        );
    } 
}



export default CreateTripPage;