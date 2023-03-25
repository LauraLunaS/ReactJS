import React, { Component } from 'react';
import './App.css';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: "Laura",
      contador: 0,
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  diminuir(){
    let state = this.state;

    if(state.contador === 0){
      alert('Opa, o contador chegou no 0');
      return
    }
    state.contador -= 1;
    state.nome = 'Leticia';
    this.setState(state);
  }

  aumentar(){
    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }

  render(){
    return (
      <div>
        <h5>Contador</h5>
        {this.props.nome}

        <h5>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h5>
      </div>
    );
  }
}    

export default App;
