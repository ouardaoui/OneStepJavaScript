import React ,{useEffect, useState} from "react";
import AddOption from "./component/AddOption"
import  Options  from "./component/Options";
import  Header  from "./component/Header";
import Action from "./component/Action";
import OptionModal from "./component/OptionModel";


const App =()=> {
  const [options,setOptions] =useState([])
  const [selectoption,setSelectOption]=useState(undefined)
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
    setSelectOption(option)
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
  const handleselectoption =() =>{
    setSelectOption(undefined)
  }
  const text = {
      title : "indicision",
      subtitle : "put your life in the hands of a computer"
    }
    return(
      <div> 
        <div className="container">
          <Header title ={text.title} subtitle={text.subtitle}/>
          <Action handleAction={options.length == 0} handlePick = {handlePick}/>
          <div className="widget">
            <Options handleDelecte ={handleDelecte} options={options} delecteOption={delecteOptions}/>
            <AddOption handleAddOption={handleAddOption}/>
          </div>
        </div>  
        <OptionModal handleselectoption={handleselectoption} selectoption={selectoption}/>   
      </div>
    )
}


  
export default App ;