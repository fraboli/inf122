import React from "react";
function perfil() {
        const click = (x) => {
            console.log(x);
        };
    return (
        <div>
            <h1>Perfil</h1>
            <p>Nombre</p>
            <input type="text" />
            <p>Apellido</p>
            <input type="text" />
            <p>Contraseña</p>
            <input type="password" />
            <button onClick={() => click("Editar")}>Editar</button>
        </div>
    )
}
export default perfil;