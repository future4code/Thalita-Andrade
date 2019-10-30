import React from "react";
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { connect } from 'react-redux'

const InputAddTask = styled(Paper)`
    width: 900px;
    height: 60px;
    display: flex;
    padding-left: 10px;
`


const AddTask = () => {

    return (
        <div>
            <InputAddTask  elevation={1}>

                <InputBase  placeholder="Digite sua tarefa"   fullWidth 
                />

            </InputAddTask>
        </div>
    );
}

// const mapDispatchToProps = dispatch => {
//     return {
        
//     }
// }

// connect(mapDispatchToProps)

export default (AddTask);