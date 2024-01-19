import React from "react";
import "../style/Login.css";
function Login() {
    const click = (x) => {
        console.log(x);
    };

    return (
        <div className="login-container">
            <p>Usuario</p>
            <input type="text" />
            <p>Contraseña</p>
            <input type="password" />
            <div className="login-remember">
                <button onClick={() => click("Ingresar")}>Ingresar</button>
                <button onClick={() => click("Registrarse")}>Registrarse</button>
            </div>
        </div>
    );
}
export default Login;