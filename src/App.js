import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import {useRef} from "react" ; 
function App() { 
   const [counter,setCounter] = useState(0); 
    const myref = useRef()

   useEffect(()=>{
       stopwatch() ; 
    },[]) 
     
    const stopwatch = ()=>{
      myref.current = setInterval(()=>{
        setCounter((p)=>p+1)
     },1000) ;  
    }
      

  return (
    <div className="App">
      <h3>Counter : {counter}</h3>
      <button onClick = {()=>{
           clearInterval(myref.current)
      }}>STOP</button>
      <button onClick={()=>{
            stopwatch() ;
      }}>START</button>
      <button onClick={()=>{
       setCounter(0)
      }}>RESET</button>
    </div>
  );
}

export default App;
