import React, { Component } from 'react';
import './App.css';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: '',
      sexo: 'masculino'
    }

    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }

  trocaEmail(e){
    let valorDigitado = e.target.value;
    this.setState({email: valorDigitado});
  }

  trocaSexo(e){
    let valorDigitado = e.target.value;
    this.setState({sexo: valorDigitado})
  }

  render(){
    return (
      <div>
        <h3>Login</h3>
        Email:
        <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail}/>
        Senha: 
        <input type="password" name="senha" value={this.state.senha}  onChange={(e) => this.setState({senha: e.target.value})} />
        Sexo:
        <select name='sexo' value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="Masculino">Maculino</option>
          <option value="Feminino">Feminino</option>
        </select>

        <div>
          <h4>{this.state.email}</h4>
          <h4>{this.state.senha}</h4>
          <h4>{this.state.sexo}</h4>
        </div>
      </div>
      
      
    );
  }
}    

export default App;
