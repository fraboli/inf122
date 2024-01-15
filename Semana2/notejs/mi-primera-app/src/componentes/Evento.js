import React from "react";
import '../styles/Evento.css';
function Evento(){
    return (
        <div className="card-container">
            <img className="card-image" src={require("../images/Evento.jpg")} alt="foto del evento" />
            <div className="card-content">
                <h2 className="card-title">Py Pizza 01 - PyPuzzle</h2>
                <p className="card-date">12 de enero de 2024</p>
                <p className="card-place">Mr Pizza, 12 de enero de 2024</p>
                <p className="card-description">¡Hola Pythonista!
                Participa en este Evento Presencial de la comunidad Python La Paz
                ¿Cuánto conoces de Python?
                Aprende a trabajar en equipo resolviendo increíbles acertijo
                ¡Anímate a ser parte de esta actividad!</p>
            </div>
        </div>
        
    );
}
export default Evento;