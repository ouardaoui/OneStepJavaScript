import { useState } from 'react';
import './App.css';

function App() {
    let dic = {
      title : "title",
      subtitle : "subtitle",
    }
    const [options,setOptions] =useState(["one","two"])
    const onFormeSubmit = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value;
      setOptions([...options,option])
      console.log(option)
      };
  return (
    <div>
      <h1>{dic.title}</h1>
      {dic.subtitle && <p>{dic.subtitle}</p>}   
      <p>{options.length > 0 ? "Here are ur options" : "no options"}</p>
      <p>{options.length}</p>
      <ol>
        <li>{options[0]}</li>
        <li>{options[1]}</li>
      </ol>
      <form onSubmit={onFormeSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
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
