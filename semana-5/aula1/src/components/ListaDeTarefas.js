import React from 'react';
import styled from 'styled-components';

const ItensTarefa = styled.li`
    list-style: none;
`

class ListaDeTarefas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorTarefa: '',
            listaDeTarefas: [],
        };  
    }

    // componentDidMount() {
    //     const storedState = JSON.parse(window.localStorage.getItem("HelloState"));
    //     this.setState(storedState);
    //   }
    
    // componentWillUnmount() {
    //     const stateAsString = JSON.stringify(this.state);
    //     window.localStorage.setItem("HelloState", stateAsString);
    // }

    // componentDidUpdate() {
    //     console.log("Fui Atualizado!");
    // }

    criarTarefa = () => {
       const novaTarefa = {
           cadaTarefa: this.state.valorTarefa,
       }

       const tarefas = [novaTarefa, ...this.state.listaDeTarefas]

       this.setState({
           listaDeTarefas: tarefas,
           valorTarefa: ' ',
       })
    }


    onChangeTarefa = (event) => {
        this.setState({valorTarefa: event.target.value})
    }

    onChangeTarefaClick = () => {
        this.setState({ valorTarefa: ' '});
      };
    


    render() {

        const todasTarefas = this.state.listaDeTarefas.map((tarefa, index) => {
            return <ItensTarefa key={index}> <input type="checkbox"/>{tarefa.cadaTarefa} 
            </ItensTarefa>
        })

        return (

            <div>
                <h3>Nova Tarefa</h3>

                <input
                    type="text" 
                    placeholder="Nova Tarefa"
                    value = {this.state.valorTarefa}
                    onChange = {this.onChangeTarefa}
        
                />

                <button  
                    onChange={this.state.onChangeTarefaClick}
                    onClick={this.criarTarefa}
                    >Criar Tarefa
                </button>

                <hr/>

                <h3>Lista de Tarefas</h3>

                <ul>
                    {todasTarefas}
                </ul>

                <hr/>

                <h3>Tarefas Concluídas</h3>
            </div>
        );
    }
}

export default ListaDeTarefas;