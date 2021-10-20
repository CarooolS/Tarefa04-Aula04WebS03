import React from 'react';

class Vacina extends React.Component{
    render(){
        return <p> {this.props.nome} é  uma das vacinas contra Covid-19.</p>
    }
}

export default Vacina;