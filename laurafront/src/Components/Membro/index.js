import React, { Component } from 'react';

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };

        this.entrar = this.entrar.bind(this);

    }

    entrar(){
        this.setState({nome: "Laura"})
    }

    render(){
        return(
            <div>
                <h5>Bem-Vindo(a){this.state.nome}</h5>
                <button onClick={this.entrar}>Entrar como Laura</button>
                <button onClick={ () => this.setState({nome: ''}) }>Sair</button>
            </div>
        );
    }
}

export default Membro;