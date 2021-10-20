// NÃO CONSEGUI TERMINAR!!!!!!
import React from 'react';

class Adicao extends React.Component{
    render(){
        const soma = parseInt(this.props.x) + parseInt(this.props.y);
        return <p>O resultado de {this.props.x} + {this.props.y} = {soma}</p>;
    }
}

export default Adicao;