import './App.css';

function Bemvindo (props) {
  return(
    <div>
      <p>Bem-Vindo {props.nome}</p>
      <p>Tenho {props.idade} Anos</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      < Bemvindo nome="Laura" idade="18"/>
      < Bemvindo nome="Leticia" idade="20"/>
    </div>
  );
}

export default App;
