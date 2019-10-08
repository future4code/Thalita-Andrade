import React, { Component } from 'react';
import { render } from 'react-dom';
import ListaDeTarefas from './components/ListaDeTarefas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }
  
  render() {

    return (
      <div>

        <ListaDeTarefas/>

      </div>

    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
