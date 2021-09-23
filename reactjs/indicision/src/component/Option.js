const Option = (props) =>{
    return(
      <div > 
        {props.optiontext}
        <button onClick={()=>props.delecteOption(props.optiontext)}>remove</button>
        
      </div>
    )
}