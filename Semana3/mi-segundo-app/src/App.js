import logo from './logo.svg';
import './App.css';
import Contador from'./component/Contador.js';
import Boton from './component/Boton.js';
import { useState } from 'react';
function App() {
  const[nroClicks, setNumClicks]=useState(0);
  const clickmas1=()=>{
    setNumClicks(nroClicks+1);
    console.log("+1");
  }
  const clickmenos1=()=>{
    setNumClicks(nroClicks-1);
    console.log("-1");
  }
  const clickmas3=()=>{
    setNumClicks(nroClicks+3);
    console.log("+3");
  }
  const clickmenos3=()=>{
    setNumClicks(nroClicks-3);
    console.log("-3");
  }
  const reiniciar=()=>{
    setNumClicks(0);
    console.log("Reiniciar");
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="+1" esBotonClick={true}
            funcionClick={clickmas1} />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={clickmenos1} />
            <Boton texto="-3" esBotonClick={true}
            funcionClick={clickmenos3} />
          <Boton texto="+3" esBotonClick={true}
            funcionClick={clickmas3} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;
