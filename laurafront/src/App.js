import React, { Component } from 'react';
import './App.css';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: false
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
    
  }

  sair(){
    this.setState({ status: false });
  } 
  
  entrar(){
    this.setState({ status: true });
  }

 


  render(){
    return (
      <div>
        {this.state.status ?
        <div>
          <h3>Bem-Vindo ao sistema</h3>
          <button onClick={this.sair}>Sair</button>
        </div> :
        <div>
            <h3>Olá Visitante, faça o login</h3>
            <button onClick={this.entrar}>Entrar no sistema</button>
        </div>
        }

      </div>
      
    );
  }
}    

export default App;
