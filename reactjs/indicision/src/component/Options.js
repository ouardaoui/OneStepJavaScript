import Option from "./Option"

const Options = (props) =>{
    return(
      <div>
        <button
        className="button--link" 
        onClick={props.handleDelecte}>Remove All</button>
        {props.options.length === 0 && <p>please add an option to get start</p>}
        <ul>
          {props.options.map((option) =><li><Option delecteOption={props.delecteOption} key={option} optiontext={option}/></li> )}
        </ul>
      </div>
    )
}
export default  Options;