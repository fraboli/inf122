import React from "react";
function Boton() {
    const Beliminar = "eliminar";
    const Bagregar = "agregar";
    const Bperfil = "perfil";
    const Click = () => {
        console.log(Bagregar);
    }

  return (
    <div>
      <button onClick={Click} >{Bagregar}</button>
      <button onClick={Click} >{Beliminar}</button>
      <button onClick={Click} >{Bperfil}</button>
    </div>
  );
}
export default Boton;