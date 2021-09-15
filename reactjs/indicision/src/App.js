import React, { useState } from 'react';
import './App.css';
function App() {
  const title  = "indicision"
  const subtitle = "put your life in the hands of computer"
  const options = ["thing one","thing two","thing four"]
  
  return(
  <div>
    <Header title ={title} subtitle ={subtitle}/>
    <Actions />
    <Options options ={options}/>
    <AddOptions />
  </div>
  );
}
class Header extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p></p>
      </div>
    );
  }
}
class Actions extends React.Component {
  render(){
    return(
      <div>
        <button>what i shoould do ?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  handleRemoveAll() {
    alert("all removed");
    }
  render(){
    return(
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} textoption={option}/>)
        }
      </div>
    );
  }
}
class Option extends React.Component {
  render(){
    return(
      <div>
      <p>{this.props.textoption}</p>
      </div>
    );
  }
}
class AddOptions extends React.Component {
  hamdleAddOption(e) {
    const option = e.target.elements.option.value.trim();//remove space 
    if(option){
      e.preventDefault(); 
      alert(option)
    }
  }
  render(){
    return(
      <form onSubmit={this.hamdleAddOption}>
        <input type="text" name="option"></input>
        <button>submit</button>
      </form>
    );
  }
}

export default App;
