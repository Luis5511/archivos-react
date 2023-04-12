import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {Greeting, Usercard} from './Greeting';
import Product,{Navbar} from './Product'
import {Button} from  './Button'
import {TaskCard} from './Task'
import {Saludar} from './Saludar'
import {Post} from './post'

const root = ReactDOM.createRoot(document.getElementById("root"));

function Contar() {
    
   const [ mensaje,setMensaje ] = useState('');
   const [counter,setCounter] = useState(0)

   useEffect(() => {
    console.log('render')
   },[counter])

    return(
        <div>
            <input onChange={e => setMensaje(e.target.value)}/>
            <button onClick={() => {alert('el mensaje es: ' + mensaje);}}>Guardar</button>
        <hr/>

        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        </div>
    )
}


root.render(<>

  <>
   <Contar/>
  </>

</>)