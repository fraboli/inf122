import React from 'react';
function Registro(){
    const click = (x) => {
        console.log(x);
    };
    return(
        <div>
            <h1>Registro</h1>
            <p>Nombre</p>
            <input type="text"/>
            <p>Apellido</p>
            <input type="text"/>
            <p>Correo</p>
            <input type="text"/>
            <div>
                <button onClick={() => click("Registrar")}>Registrar</button>
            </div>
        </div>
    )
}
export default Registro;