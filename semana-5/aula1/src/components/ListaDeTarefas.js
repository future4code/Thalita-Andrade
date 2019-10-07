import React from 'react'

class ListaDeTarefas extends React.Component {
    constructor() {
        super();
        this.state = {
            valorTarefa: '',
            listaDeTarefas: [],
        };  
    }

    componentDidMount() {
        const storedState = JSON.parse(window.localStorage.getItem("HelloState"));
        this.setState(storedState);
      }
    
    componentWillUnmount() {
        const stateAsString = JSON.stringify(this.state);
        window.localStorage.setItem("HelloState", stateAsString);
    }

    componentDidUpdate() {
        console.log("Fui Atualizado!");
    }

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
        this.setState({ valorTarefav: ' '});
      };
    


    render() {

        const todasTarefas = this.state.listaDeTarefas.map((tarefa, index) => {
            return <li key={index} > {tarefa.cadaTarefa} 
            </li>
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
            </div>
        );
    }
}

export default ListaDeTarefas;