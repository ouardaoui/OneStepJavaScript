const Option = (props) =>{
    return(
      <div className="option"> 
        <p className="option__text">{props.optiontext}</p>
        <button 
        className="button--link"
        onClick={()=>props.delecteOption(props.optiontext)}>remove</button>
        
      </div>
    )
}
export default Option ;