import React from "react";
import './App.css';
import {useState} from 'react'


function App() {
  let inputNumbers = React.createRef();
  const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1)
    }
    const minus = () =>{
      setCount(count - 1)
    }
    const zero = () =>{
      setCount(count * 0)
    }
    // function inputValue (){
    //   // parseInt(inputNumbers.current.value)
    //   return(
    //     parseInt(inputNumbers.current.value)
    //   )
    // }
    const GodMode = () =>{
      setCount(count + parseInt(inputNumbers.current.value))
    }
    const UltraDamage = () =>{
      setCount(count - parseInt(inputNumbers.current.value))
    }
    
  return (
    <div className="AppClicker">
      <header className="App-header">
      <h1 className = 'Number' >Health &#10084; {count}</h1>
      <p onClick = {increment}>Healing (+1)</p> 
      <p onClick = {minus}>Damage (-1)</p>    
      <p onClick = {zero}>Equilibrium (0)</p> 
      {/* в инпуте было изначально onInput = {inputValue} */}
      <div  className = "inp">
        <p onClick = {GodMode}>God mode???</p>  
        <input type = "number"  ref = {inputNumbers}/> 
        <p onClick = {UltraDamage}>DEVASTATOR???</p> 
      </div>
       

      </header>
    </div>
  );
}
export default App;
