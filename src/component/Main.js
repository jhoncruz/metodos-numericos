import React, { Component } from 'react'
import Header from './Header'
import Input from './input/Input'
//import Matriz from './matriz/Matriz'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            f11: 0,
            f12: 0,
            f13: 0,
            f21: 0,
            f22: 0,
            f23: 0,
            f31: 0,
            f32: 0,
            f33: 0,
            ld1: 0,
            ld2: 0,
            ld3: 0,
            dete_original: 0,
            dete_modifi1: 0,
            dete_modifi2: 0,
            dete_modifi3: 0,
            dete_original_bool: true,
            dete_modifi1_bool: true,
            dete_modifi2_bool: true,
            dete_modifi3_bool: true,
        }
        /*this.getFilas = this.getFilas.bind(this)
        this.getColumnas = this.getColumnas.bind(this)*/
    }

    deter_original() {
        let val1 = (this.state.f11 * ((this.state.f22 * this.state.f33) - (this.state.f32 * this.state.f23)))
        let val2 = (this.state.f12 * ((this.state.f21 * this.state.f33) - (this.state.f31 * this.state.f23)))
        let val3 = (this.state.f13 * ((this.state.f21 * this.state.f32) - (this.state.f31 * this.state.f22)))

        return (val1 - val2 + val3)

        /*
        this.setState({
            dete_orifinal: parseFloat((val1 - val2 + val3)),
            dete_original_bool: !this.state.dete_original_bool,
        })
        console.log(this.state.dete_orifinal)
        */
    }

    dete_modificada1() {
        let val1 = (this.state.ld1 * ((this.state.f22 * this.state.f33) - (this.state.f32 * this.state.f23)))
        let val2 = (this.state.f12 * ((this.state.ld2 * this.state.f33) - (this.state.ld3 * this.state.f23)))
        let val3 = (this.state.f13 * ((this.state.ld2 * this.state.f32) - (this.state.ld3 * this.state.f22)))
        return (val1 - val2 + val3)
    }

    dete_modificada2() {
        let val1 = (this.state.f11 * ((this.state.ld2 * this.state.f33) - (this.state.ld3 * this.state.f23)))
        let val2 = (this.state.ld1 * ((this.state.f21 * this.state.f33) - (this.state.f31 * this.state.f23)))
        let val3 = (this.state.f13 * ((this.state.f21 * this.state.ld3) - (this.state.f31 * this.state.ld2)))
        return (val1 - val2 + val3)
    }

    dete_modificada3() {
        let val1 = (this.state.f11 * ((this.state.f22 * this.state.ld3) - (this.state.f32 * this.state.ld2)))
        let val2 = (this.state.f12 * ((this.state.f21 * this.state.ld3) - (this.state.f31 * this.state.ld2)))
        let val3 = (this.state.ld1 * ((this.state.f21 * this.state.f32) - (this.state.f31 * this.state.f23)))
        return (val1 - val2 + val3)
    }


    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='header-container'>
                            <Header />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <label>
                                            No. filas
                                        </label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <Input valor={this.getFilas} name='filas' fondo='#' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <label>
                                            No. columnas
                                        </label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <Input valor={this.getColumnas} name='columnas' fondo='#' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            {
                                // Espacio para construir la matriz
                            }
                            <div className='col-lg-12 matriz'>
                                <div className='row'>
                                    <div className='col-lg-9'>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <input
                                                    type='number'
                                                    name='x1'
                                                    onBlur={
                                                        () => { this.setState({ f11: document.getElementsByName('x1')[0].value }) }
                                                    }
                                                    placeholder="x1" className='form-control input-cunstom' />
                                            </div>
                                            <div className='col-lg-4'>
                                                <input
                                                    type='number'
                                                    name='x2'
                                                    onBlur={
                                                        () => { this.setState({ f12: document.getElementsByName('x2')[0].value }) }
                                                    }
                                                    placeholder="x2" className='form-control input-cunstom' />
                                            </div>
                                            <div className='col-lg-4'>
                                                <input
                                                    type='number'
                                                    name='x3'
                                                    onBlur={
                                                        () => { this.setState({ f13: document.getElementsByName('x3')[0].value }) }
                                                    }
                                                    placeholder="x3" className='form-control input-cunstom' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <input
                                                    type='number'
                                                    name='y1'
                                                    onBlur={
                                                        () => { this.setState({ f21: document.getElementsByName('y1')[0].value }) }
                                                    }
                                                    placeholder="y1" className='form-control input-cunstom' />
                                            </div>
                                            <div className='col-lg-4'>
                                                <input
                                                    type='number'
                                                    name='y2'
                                                    onBlur={
                                                        () => { this.setState({ f22: document.getElementsByName('y2')[0].value }) }
                                                    }
                                                    placeholder="y2" className='form-control input-cunstom' />
                                            </div>
                                            <div className='col-lg-4'>
                                                <input
                                                    type='number'
                                                    name='y3'
                                                    onBlur={
                                                        () => { this.setState({ f23: document.getElementsByName('y3')[0].value }) }
                                                    }
                                                    placeholder="y3" className='form-control input-cunstom' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-4'>
                                                <input
                                                    type='number'
                                                    name='z1'
                                                    onBlur={
                                                        () => { this.setState({ f31: document.getElementsByName('z1')[0].value }) }
                                                    }
                                                    placeholder="z1" className='form-control input-cunstom' />
                                            </div>
                                            <div className='col-lg-4'>
                                                <input
                                                    type='number'
                                                    name='z2'
                                                    onBlur={
                                                        () => { this.setState({ f32: document.getElementsByName('z2')[0].value }) }
                                                    }
                                                    placeholder="z2" className='form-control input-cunstom' />
                                            </div>
                                            <div className='col-lg-4'>
                                                <input
                                                    type='number'
                                                    name='z3'
                                                    onBlur={
                                                        () => { this.setState({ f33: document.getElementsByName('z3')[0].value }) }
                                                    }
                                                    placeholder="z3" className='form-control input-cunstom' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 lados-derechos'>
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                                <input
                                                    type='number'
                                                    name='ld1'
                                                    onBlur={
                                                        () => { this.setState({ ld1: document.getElementsByName('ld1')[0].value }) }
                                                    }
                                                    placeholder="ld1" className='form-control input-cunstom' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                                <input
                                                    type='number'
                                                    name='ld2'
                                                    onBlur={
                                                        () => { this.setState({ ld2: document.getElementsByName('ld2')[0].value }) }
                                                    }
                                                    placeholder="ld2" className='form-control input-cunstom' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                                <input
                                                    type='number'
                                                    name='ld3'
                                                    onBlur={
                                                        () => { this.setState({ ld3: document.getElementsByName('ld3')[0].value }) }
                                                    }
                                                    placeholder="ld3" className='form-control input-cunstom' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <input className='btn btn-primary btn-md boton' type='button' value='Resolver Cramer' onClick={() => this.deter_original()} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 decoro'>
                                {
                                    this.state.dete_original_bool ?
                                        <div>Determinante matriz original: <span className='bg-success'>{this.deter_original()}</span></div>
                                        : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 right-side'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                {
                                    this.state.dete_modifi1_bool ?
                                        <div>Determinante matriz modificada 1: <span className='bg-success'>{this.dete_modificada1()} / {this.deter_original()} = {(this.dete_modificada1() / this.deter_original())}</span></div>
                                        : ''
                                }
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                {
                                    this.state.dete_modifi2_bool ?
                                        <div>Determinante matriz modificada 2: <span className='bg-success'>{this.dete_modificada2()} / {this.deter_original()} = {(this.dete_modificada2() / this.deter_original())}</span></div>
                                        : ''
                                }
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                {
                                    this.state.dete_modifi3_bool ?
                                        <div>Determinante matriz modificada 3: <span className='bg-success'>{this.dete_modificada3()} / {this.deter_original()} = {(this.dete_modificada3() / this.deter_original())}</span></div>
                                        : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}