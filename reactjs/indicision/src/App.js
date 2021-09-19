import React ,{useState} from "react";
const App =()=> {
  const [options,setOptions] =useState(["first thing","scond thing"])
  const handleDelecte = () =>  {
    setOptions([])
  }
  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length)
    const option = options[randomNum]
    alert(option)
  }
  const handleAddOption =(option)=> {
    if(!option){
      return 'Enter valid value to add item';
    }else if(options.indexOf(option)>-1){
      return 'This option already exists';
    }
    
    setOptions([...options,option])
    
  }
  const delecteOptions = (optionToRmove) => {
    setOptions(options.filter((option)=>{return optionToRmove !== option}))
  }

  const text = {
      title : "indicision",
      subtitle : "put your life in the hands of a computer"
    }
    return(
      <div> 
      <Header title ={text.title} subtitle={text.subtitle}/>
        <Action handleAction={options.length == 0} handlePick = {handlePick}/>
        <Options handleDelecte ={handleDelecte} options={options} delecteOption={delecteOptions}/>
        <AddOption handleAddOption={handleAddOption}/>
      </div>
      )
  }
const Header =(props) => {

  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

const Action = (props) => {
  return(
  <div>
    <button
    onClick={props.handlePick} 
    disabled={props.handleAction}>what i should do ?</button>
  </div>
  );
}

const Options = (props) =>{
    return(
      <div>
        <button onClick={props.handleDelecte}>Remove All</button>
        <ul>
          {props.options.map((option) =><li><Option delecteOption={props.delecteOption} key={option} optiontext={option}/></li> )}
        </ul>
      </div>
    )
}

const Option = (props) =>{
    return(
      <div > 
        {props.optiontext}
        <button onClick={()=>props.delecteOption(props.optiontext)}>remove</button>
        
      </div>
    )
}


const AddOption = (props) =>{

  const[error,setError] =useState(undefined)
  const handleAddOption =(e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    setError(props.handleAddOption(option))
  }
  
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  
}
  


export default App ;