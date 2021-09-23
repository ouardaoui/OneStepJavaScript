import React ,{useEffect, useState} from "react";
import AddOption from "./component/AddOption"
import  Options  from "./component/Options";
import  Header  from "./component/Header";
import Action from "./component/Action";


const App =()=> {
  const [options,setOptions] =useState(["first thing","scond thing"])
  useEffect(() => {
    const data = localStorage.getItem("options")
    if(data){
      setOptions(JSON.parse(data))
    }
  },[])
  
  useEffect(()=>{
    const json = JSON.stringify(options)
    localStorage.setItem("options",json)
    
  })
  
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


  
export default App ;