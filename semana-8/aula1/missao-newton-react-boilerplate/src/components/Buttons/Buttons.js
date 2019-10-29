import React from "react";
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledButtonMark = styled(Button) `
    background: white;
    width: 150px;
    height: 40px;
`
const StyledButton = styled(Button) `
    background: white;
    width: 150px;
    height: 40px;
`

const AllButtons = styled(Paper)`
    width: 900px;
    height: 60px;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    justify-content: space-between;
`

const Buttons4Task = () => {

    return (
        <div>
            <AllButtons  elevation={1}>
                <StyledButtonMark variant="contained">
                Marcar todas
                </StyledButtonMark>

                <StyledButton variant="contained">
                Todas
                </StyledButton>

                <StyledButton variant="contained">
                Pendentes
                </StyledButton>

                <StyledButton variant="contained">
                Completas
                </StyledButton>

                <StyledButton variant="contained">
                Excluir todas
                </StyledButton>

            </AllButtons>
        </div>
    );
}

export default Buttons4Task;