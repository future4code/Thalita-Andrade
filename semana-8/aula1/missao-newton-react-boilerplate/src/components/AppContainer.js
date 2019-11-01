import React from 'react';
import styled from 'styled-components';
import NewTaskInput from '../containers/NewTaskInput';
import TaskList from '../containers/TaskList';

const Container4Task = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;
	flex-direction: column;
`

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Container4Task>
				<TaskList/>
				<NewTaskInput/>
			</Container4Task>
		)
	}
}


export default (AppContainer);