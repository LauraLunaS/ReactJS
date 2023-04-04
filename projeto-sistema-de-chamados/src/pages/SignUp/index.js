import logo from '../../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  
    return(
      <div className="container-center">
        <div className="login">
          <div className="login-area">
            <img src={logo} alt="Logo do sistema de chamados" />
          </div>
  
          <form>
            <h1>Nova conta</h1>
            <input 
              type="text" 
              placeholder="Seu nome"
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />
  
            <input 
              type="password" 
              placeholder="********"
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
            />
  
            <button type="submit">Cadastrar</button>
          </form>
  
          <Link to="/register">Já possui uma conta? Faça login</Link>
  
        </div>
      </div>
    )
  }