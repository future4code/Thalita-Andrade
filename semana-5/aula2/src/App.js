import React, { Component } from 'react';
import { render } from 'react-dom';
import FormularioPag1 from './components/FormularioPag1';


class App extends Component {

  render() {
    return (
      <div>
       <FormularioPag1/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
