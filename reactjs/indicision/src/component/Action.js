
const Action = (props) => {
    return(
    <div>
      <button
      onClick={props.handlePick} 
      disabled={props.handleAction}>what i should do ?</button>
    </div>
    );
  }
  export default Action ;