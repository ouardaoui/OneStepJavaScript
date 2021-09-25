import react ,{useState} from "react";
const AddOption = (props) =>{

    const[error,setError] =useState(undefined)
    const handleAddOption =(e) => {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
  
      setError(props.handleAddOption(option))
      if(!error){
        e.target.elements.option.value =""
      }
    }
    
      return (
        <div>
          {error && <p className="add-option-error">{error}</p>}
          <form className="add-option" onSubmit={handleAddOption}>
            <input className="add-option__input" type="text" name="option" />
            <button
            className="button"
            >Add Option</button>
          </form>
        </div>
      );
    
  }
  export default AddOption ;