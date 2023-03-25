import React, { Component } from 'react';
import './App.css';


class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre username={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
        <Social fb={this.props.facebook} lk={this.props.linkedin} yt={this.props.youtube} />
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return (
      <div>
        <p>Olá sou o(a) {this.props.username}</p>
        <p>Cargo: {this.props.cargo}</p>
        <p>Idade: {this.props.idade} anos</p>
      </div>
    );
  }
}

class Social extends Component{
  render(){
    return(
      <div>
        <a href={this.props.fb}>Facebook</a>
        <a href={this.props.lk}>Linkedin</a>
        <a href={this.props.yt}>Youtube</a>
    </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <h1>Conheça nossa equipe:</h1>
        <Equipe nome="Laura" cargo="Programadora" idade="18" facebook="https://pt-br.facebook.com/" linkedin="https://br.linkedin.com/" youtube="https://www.youtube.com/"/>
    </div>
  );
}

export default App;
