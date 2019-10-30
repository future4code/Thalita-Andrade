import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { connect } from 'react-redux';

const ListAllTask = styled(Paper) `
    width: 900px;
    height: 60px;
    display: flex;
    padding-left: 10px;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
`

const AllTask = () => {

    return (
        <div> 
     
            <ListAllTask>
                <Checkbox
                    checked
                />

                <Typography>Tarefa 1</Typography>

                <IconButton aria-label="Delete" >
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </ListAllTask>

            <ListAllTask>
                <Checkbox
                    checked
                />

                <Typography>Tarefa 2</Typography>

                <IconButton aria-label="Delete" >
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </ListAllTask>
     
        </div>
    );
}

function mapStateToProps (state) {
    return {
        tasks: state.tasksReducer
    }
}

export default connect(mapStateToProps)(AllTask);