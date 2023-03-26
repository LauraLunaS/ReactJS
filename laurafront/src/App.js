import React, { useEffect, useState, useMemo } from 'react';


function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])


  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('');
  }

  const totaltarefas = useMemo(() => tarefas.length, [tarefas]);


  return (
    <div>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
        <br></br>
        <strong>Você tem {totaltarefas} tarefas!</strong>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>    
      <button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;
