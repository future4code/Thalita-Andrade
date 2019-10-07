import React, { Component } from 'react';
import { render } from 'react-dom';
import CriarPost from './components/CriarPost'

class App extends Component {
  
  render() {
   
    return (
      <div>
        <CriarPost/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
