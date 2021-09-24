const Option = (props) =>{
    return(
      <div > 
        {props.optiontext}
        <button 
        className="button--link"
        onClick={()=>props.delecteOption(props.optiontext)}>remove</button>
        
      </div>
    )
}
export default Option ;