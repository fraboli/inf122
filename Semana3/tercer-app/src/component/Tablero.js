import React, { useState } from "react";
import '../style/Tablero.css';
import Cuadro from "./Cuadro";
function Tablero(){
    const [cuadros, setCuadro]=useState(Array(9).fill(null)); 
    const [jugador, setJugador]=useState("O");   
    //const [valor, setValor]=useState('X');
    const click = (i) => {
        
            const CuadroTemp =[...cuadros];
            CuadroTemp[i]=jugador;
            setCuadro(CuadroTemp);
        if (jugador==="X"){
            //setValor('O');
            setJugador("O");
        }
        else{
            //setValor("X");
            setJugador("X");
        }
    }
    return(
        <div className="Juego">
            <h1>Siguiente jugador: {jugador}</h1>
            <div className="tablero" >
                <Cuadro valor={cuadros[0]} funcion = {() =>click(0)}/>
                <Cuadro valor={cuadros[1]} funcion = {() =>click(1)}/>
                <Cuadro valor={cuadros[2]} funcion = {() =>click(2)}/>
                <Cuadro valor={cuadros[3]} funcion = {() =>click(3)}/>
                <Cuadro valor={cuadros[4]} funcion = {() =>click(4)}/>
                <Cuadro valor={cuadros[5]} funcion = {() =>click(5)}/>
                <Cuadro valor={cuadros[6]} funcion = {() =>click(6)}/>
                <Cuadro valor={cuadros[7]} funcion = {() =>click(7)}/>
                <Cuadro valor={cuadros[8]} funcion = {() =>click(8)}/>
            </div>
        </div>
    )
}
export default Tablero;