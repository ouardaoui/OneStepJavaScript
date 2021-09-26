
const Action = (props) => {
    return(
    <div>
      <button
      className="bigbutton"
      onClick={props.handlePick} 
      disabled={props.handleAction}>what i should do ?</button>
    </div>
    );
  }
  export default Action ;
  