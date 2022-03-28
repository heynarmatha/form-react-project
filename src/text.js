import {useState} from 'react';
// import Form from './components/Form';

const App = ()=> {
  console.log("Rendering Start");
  const [count,setCount]=useState(0)
  return (
    <div style={{backgroundColor:"skyblue",padding:"10px"}}>

      <h1>React</h1>

      <p>User : {count}</p>

      <button onClick={()=>{
        console.log("plus");      
        setCount(count+1) 
      }}>Increment</button>

      <button onClick={()=>{
        console.log("minus");
        setCount(count-1)        
      }}>Decrement</button>

    </div>
  );
}

export default App;
