import React, { Component } from "react";
import List from "@material-ui/core/List";
import { Task } from "../../components/Task";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { completeTask, deleteTask, fetchTasks, markAllTasksAsDone } from "../../actions/tasks";


class TaskList extends Component {
    componentDidMount() {
        this.props.fetchAllTasks();
    }

    render() {
        return (
            <List>
                { this.props.tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        onComplete={this.props.completeTask}
                        onDelete={this.props.deleteTask}
                    />   
                ))}

                <Button onClick={this.props.markAllTasksAsDone}>Marcar todas</Button>
            </List>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return{
        tasks: state.tasks.allTasks
    } 
}

const mapDispatchToProps = dispatch => ({
    deleteTask: id => dispatch(deleteTask(id)),
    completeTask: id => dispatch(completeTask(id)),
    fetchAllTasks: () => dispatch(fetchTasks()),
    markAllTasksAsDone: () => dispatch(markAllTasksAsDone())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);