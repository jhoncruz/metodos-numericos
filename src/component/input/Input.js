import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
                <input
                    className= 'enter_text'
                    type='number'
                    name={this.props.name}
                    onBlur={
                        () => this.props.valor? this.props.valor(document.getElementsByName(this.props.name)[0].value) : console.log('Propiedad no especificada')
                    }
                    placeholder={this.props.fondo} className='form-control input-cunstom' />
            </div>
        );
    }
}