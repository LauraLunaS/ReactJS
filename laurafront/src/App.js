import React, { Component } from 'react';
import Feed from './components/Feed'
import './App.css';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: 1, username: 'Laura', curtidas:10, comentarios:2},
        {id: 2, username: 'Laura', curtidas:20, comentarios:4},
        {id: 3, username: 'Laura', curtidas:30, comentarios:8},
        {id: 4, username: 'Laura', curtidas:1, comentarios:1},
      ]
    }
  }

  render(){
    return (
      <div>
        
        {this.state.feed.map((item)=>{
          return(
            < Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
          );
        })}
       

      </div>
      
    );
  }
}    

export default App;
