import React from "react";
import { connect } from "react-redux";
import { createTaskAPI, getTasksAPI } from "../../actions";


class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTask: "",
      valueSelectDay: "",
    }
  };

  onChangeValueSelect = (event) => {
    this.setState({valueSelectDay: event.target.value})
  };

  onChangeValueTask = (event) => {
    this.setState({valueTask: event.target.value})
  };

  clearNewTaskValue = () => {
    this.setState({ valueTask: "" });
    this.setState({ valueSelectDay: "" });
  };

  handleCreateTask = () => {
    const {valueTask, valueSelectDay} = this.state
    this.props.createTask(valueTask, valueSelectDay)

    this.clearNewTaskValue();
  };

  componentDidMount() {
    this.props.getTasks()
  }

  
  render() {

    // const tasksDay = this.props.createTask.filter((task) => {
    //     return(
    //       <ul>
    //         <li>{task.text} {task.day} </li>
    //       </ul>
    //     )
    //   })
    

    return (
      <div>
        <h2> Planner Semanal</h2>

        <hr/>

        <input
          value={this.state.valueTask}
          onChange={this.onChangeValueTask}
          name="task"
          type="text"
          placeholder="Digite sua tarefa"
        />

        <select
          name="day"
          value={this.state.valueSelectDay}
          onChange={this.onChangeValueSelect}
        >
          <option value="Segunda">Segunda-Feira</option>
          <option value="Terça">Terça-Feira</option>
          <option value="Quarta">Quarta-Feira</option>
          <option value="Quinta">Quinta-Feira</option>
          <option value="Sexta">Sexta-Feira</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option> 
        </select>
        <button onClick={this.handleCreateTask}>Adicionar Tarefa</button>

        <hr/>
        <div>

          <h4>Segunda - Feira</h4>
          <hr/>

          <h4>Terça - Feira</h4>

          <hr/>

          <h4>Quarta - Feira</h4>

          <hr/>

          <h4>Quinta - Feira</h4>

          <hr/>

          <h4>Sexta - Feira</h4>

          <hr/>

          <h4>Sábado</h4>

          <hr/>

          <h4>Domingo</h4>
        </div>
        
      </div>
      );
  }
}

const mapStateToProps = state => ({
  allTasks: state.tasks
})

function mapDispatchToProps (dispatch) {
  return {
    createTask: (valueTask, valueSelectDay) => dispatch(createTaskAPI(valueTask, valueSelectDay)),

    getTasks: () => dispatch(getTasksAPI())
  }

}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Planner);