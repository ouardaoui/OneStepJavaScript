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
          {error && <p>{error}</p>}
          <form onSubmit={handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    
  }