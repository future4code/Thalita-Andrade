import React from 'react';
import styled from 'styled-components';

const Container4Task = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;
	flex-direction: column;
`
const TituloPagina = styled.p `
	font-size: 75px;
	color: #b83f44;
	font-family: Arial;
`

const SectionButtonFunction = styled.div `
	display: flex;
	justify-items: center;
	align-items: center;
`
const InputTaskAdd = styled.input`
	width: 500px;
	height: 50px;
`
const TaskADD = styled.div`
	width: 500px;
	height: 50px;
	border: solid black 1px;
`



export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Container4Task>
				<header>
					<TituloPagina>4Task</TituloPagina>
				</header>

				
				<section>
					{/* Chamar a função AddTask */}
					<InputTaskAdd
					
					/>
				</section>


				<section>
					{/* Chama a função DeleteTask */}
					{/* Chama a função CompleteTask  */}
					<TaskADD
					
					/>
				</section>

				<SectionButtonFunction>

					{/* Chamar a função MarkAllTasks */}
					<button>Marcar todas como Completas</button>

					{/* Chama a função AllTask */}
					<button>Todas</button>

					{/* Chama a função AllPendingTasks */}
					<button>Pendentes</button>

					{/* Chama a função AllCompleteTasks */}
					<button>Completas</button>

					{/* Chama a função RemoveAllCompleteTask */}
					<button>Remover completas</button>
				</SectionButtonFunction>

			</Container4Task>
		)
	}
}