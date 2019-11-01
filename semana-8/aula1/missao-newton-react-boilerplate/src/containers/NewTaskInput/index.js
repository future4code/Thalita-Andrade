import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { updateTaskTitle, createTask } from '../../actions/tasks';


const NewTaskInput = props => {

    const onUpdateTaskTitle = (event) => {
        props.updateTaskTitle(event.target.value);
    };

    const onEnterPress = event => {
        if (event.key === "Enter") {
            props.createNewTask();
        }
    };

    return (
        <TextField
            value={props.currentTaskTitle}
            onKeyPress={onEnterPress}
            onChange={onUpdateTaskTitle}
        />
    );
};

const mapStateProps = (state) => ({
    currentTaskTitle: state.tasks.currentTaskTitle
});

const mapDispatchToProps = (dispatch) => ({
    createNewTask: () => dispatch(createTask()),
    updateTaskTitle: newTitle => dispatch(updateTaskTitle(newTitle))
});

export default connect(
    mapStateProps, 
    mapDispatchToProps
    )(NewTaskInput);

