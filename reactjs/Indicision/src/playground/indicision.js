import { useState } from 'react';
import './App.css';

function App() {
    let dic = {
      title : "title",
      subtitle : "subtitle",
    }
    const [options,setOptions] =useState([])
    const onFormeSubmit = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value;
      setOptions([...options,option])
  
    };
    const onMakedecision = () => {
      const randomNum = Math.floor(Math.random() * options.length)
      const option = options[randomNum]
      alert(option)
    }
  return (
    <div>
      <h1>{dic.title}</h1>
      {dic.subtitle && <p>{dic.subtitle}</p>}   
      <p>{options.length > 0 ? "Here are ur options" : "no options"}</p>
      <button disabled = {options.length===0} onClick={onMakedecision}>what should i do ?</button>
      <button onClick={() => setOptions([])}>Remove</button>
      <ol>
      {
        options.map((option) => {
          return(<li key={option}>{option}</li>);
        })
      }
      </ol>
      <form onSubmit={onFormeSubmit} >
        <input type="text" name="option" id="submit"></input>
        <button >Add Option</button>
      </form>
    </div>
    
    
  );
}

// function App() {
//   const [count,setCount] = useState(0)
//   return(
//       <div>
//         <h1>{count}</h1>
//         <button onClick = {() => setCount(count+1)}>+1</button>
//         <button onClick = {() => setCount(count-1)}>-1</button>
//         <button onClick = {() => setCount(0)}>reset</button>
//       </div>
//   );  
// }

export default App;
