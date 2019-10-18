import React from 'react';
import ReactDOM from "react-dom";
import PokemonAPITest from './Components/PokemonAPITest';
import MeuBoredAPITest from './Components/MeuBoredAPI';
import ShibeAPITest from './Components/ShibeAPITest';
import BoredAPITest from './Components/BoredAPITest'


function App() {
  return (
    <div>

      {/* //Esta com erros// */}
      <MeuBoredAPITest/>

      {/* //Esta com erros// */}
      {/* <ShibeAPITest/> */}  

      {/* //Funcionando// */}
      {/* <PokemonAPITest/>   */}

      {/* //Funcionando// */}
      {/* <BoredAPITest/> */}

    </div>
  );
}

// render(<App />, document.getElementById('root'));

export default App;
