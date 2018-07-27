import React, { Component } from 'react'
//import { ifError } from 'assert';
//import Input from '../input/Input'

export default class Matriz extends Component {

    createMatriz(filas, columnas) {
        /*console.log('Filas ', filas)
        console.log('Columnas ', columnas)
        console.log('Filas length', filas.length)
        console.log('Columnas length', columnas.length)
        for (let i = 0; i < filas.length; i++) {
            for (let j = 0; j < columnas.length; j++) {
                console.log(i, j)
            }
        }
        return '';
        */
    }

    render() {
        return (
            <div>
                {
                    this.props.colums && this.props.fills ?
                        this.createMatriz(this.props.fills, this.props.colums)
                        :
                        'Propiedades: filas y columnas no establecidas'
                }
            </div>
        );
    }
}
