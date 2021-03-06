import {useState} from 'react';
import Number from './components/number';

const App = ()=> {
  console.log("Rendering Start");
  const [count,setCount]=useState(0)
  return (
    <div style={{backgroundColor:"skyblue",padding:"10px"}}>

      <h1>React</h1>

      <Number currentCount = {count} name="john" value={10}/>

      <button onClick={()=>{
        console.log("plus");      
        setCount((count || 0) +1) 
      }}>Increment</button>

      <button onClick={()=>{
        console.log("minus");
        setCount((count || 0) -1)        
      }}>Decrement</button>

    </div>
  );
}

export default App;
