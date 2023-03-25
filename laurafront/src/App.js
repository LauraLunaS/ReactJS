import React, { Component } from 'react';
import './App.css';


  class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        form:{
          nome: '',
          email: '',
          senha: '',
        }

      }

      this.dadosForm = this.dadosForm.bind(this)
}

    dadosForm(e){
      let form = this.state.form;
      form[e.target.name] = e.target.value;
      this.setState({form: form});
    }



      render(){
        return (
          <div>

            <h3>Login</h3>
            Nome: 
            <input type="text" name='nome' value={this.state.form.nome} onChange={this.dadosForm} />
            Email:
            <input type="email" name="email" value={this.state.form.email} onChange={this.dadosForm}/>
            Senha: 
            <input type="password" name="senha" value={this.state.form.senha}  onChange={this.dadosForm} />
            Sexo:
            <select name='sexo' value={this.state.form.sexo} onChange={this.dadosForm}>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>

            <div>
              <h4>{this.state.form.email}</h4>
              <h4>{this.state.form.senha}</h4>
              <h4>{this.state.form.sexo}</h4>
            </div>
          </div>


    );
  }
} 

export default App;