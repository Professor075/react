import { useState } from 'react';
import './App.css'

// const value = o;




function App() {

  let [value, changeValue] = useState(0); 

  // let value = 15;

  function addValue(){
    //console.log("value added ", value);
    // value++;
    // value++;/
    if(value < 20){

      changeValue(value => value + 1);
      // changeValue(value => value + 1);
      // changeValue(value + 1);
      // changeValue(value + 1);
    }
  }
  
  function subValue(){
    //console.log("value substracted ", value);
    if(value > 0){
      changeValue(value - 1);
    }
    
    // value--;
  }
  

  return (
    <>
      <h1>chae aur react!!</h1>
      <h2>Counter Value = {value}</h2>
      <button onClick={addValue}>increase value {value}</button>
      <br />
      <button onClick={subValue}>decrease value {value}</button>
      <p>footer: {value}</p>
    </>
  )
}

export default App
