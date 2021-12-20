import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './main.scss'
ReactDOM.render(<App />, document.getElementById('app'));



//Detalle
let $botonDetalle = document.getElementById('detalleBtn');
let $botonHistoria = document.querySelector('#historiaBtn');

//Historia
let $detalle = document.getElementById('detalle');
let $historia = document.querySelector('#historia');

//acciones
$botonDetalle.addEventListener('click', () => {
    $detalle.style.animation="detalle 0.3s linear forwards";
})
$botonHistoria.addEventListener('click', () => {
    $historia.style.animation = "historia 0.3s linear forwards";
})

