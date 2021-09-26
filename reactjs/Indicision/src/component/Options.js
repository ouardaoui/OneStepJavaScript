import Option from "./Option"

const Options = (props) =>{
    return(
      <div>
        <div className="widget-header">
          <p className="widget-header__title">your options</p>
          <button
          className="button--link" 
          onClick={props.handleDelecte}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">please add an option to get start</p>}
        <ol>
          {props.options.map((option) =><li><Option delecteOption={props.delecteOption} key={option} optiontext={option}/></li> )}
        </ol>
      </div>
    )
}
export default  Options;