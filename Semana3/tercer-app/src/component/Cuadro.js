import React from "react";
import '../style/Cuadro.css'
function cuadro({valor, funcion}){
    return(
        <button className="cuadro" onClick={funcion}>
            {valor}
        </button>
    );
}
export default cuadro;