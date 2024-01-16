import React from "react";
import '../style/contador.css';
function Contador({ nroClicks, mostrar }) {
    return (
        mostrar ? <div className='contador'>{nroClicks}</div> : null
    );

}
export default Contador;