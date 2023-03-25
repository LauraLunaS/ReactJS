import './App.css';

function Equipe (props) {
  return(
    <div>
      <Sobre username={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook} lk={props.linkedin} yt={props.youtube} />
    </div>
  );
}

function Sobre (props) {
  return (
    <div>
      <p>Olá sou o(a) {props.username}</p>
      <p>Cargo: {props.cargo}</p>
      <p>Idade: {props.idade} anos</p>
    </div>
  )
}

function Social (props) {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
      <a href={props.lk}>Linkedin</a>
      <a href={props.yt}>Youtube</a>
    </div>

  );
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
