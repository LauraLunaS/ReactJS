import React, { Component } from 'react';
import './App.css';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      
      nome: '',
      email: '',
      senha: '',
      
    }

    this.cadastrar = this.cadastrar.bind(this);

  }

  cadastrar(event){
    const {nome, email, senha} = this.state;

    if(nome !== '' && email !=='' && senha !==''){
      alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
    }else{
      this.setState({error: 'Ops! Parece que está faltando algo'})
    }

    event.preventDefault();
  }

 
  
  render(){
    return (
      <div>
        <h3>Novo usuário</h3>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input type="text" name="nome" value={this.state.nome} onChange={ (e) => this.setState({nome: e.target.value})}/>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})}/>
          <label>Senha: </label>
          <input type="password" name="senha" value={this.state.senha}  onChange={(e) => this.setState({senha: e.target.value})} />
          <button type='submit'>Cadastrar</button>
        </form>

      </div>
      
      
    );
  }
}    

export default App;
