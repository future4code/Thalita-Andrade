import React from 'react';
import styled from 'styled-components';
import Title4Task from './Title/Title';
import AddTask from '../containers/Add-Tesk/AddTask';
import AllTask from '../containers/AllTask/AllTask';
import Buttons4Task from './Buttons/Buttons';

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
				<Title4Task/>
				<AddTask/>
				<AllTask/>
				<Buttons4Task/>
			</Container4Task>
		)
	}
}