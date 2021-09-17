import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      options : ["first thing","scond thing","third thing"]
    }
  }
  render(){
    const text = {
      title : "indicision",
      subtitle : "put your life in the hands of a computer"
    }
    return(
      <div> 
      <Header title ={text.title} subtitle={text.subtitle}/>
        <Action/>
        <Remove/>
        <Options options={this.state.options}/>
        <Addoption/>
      </div>
      )
  }
};
class Header extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
}
class Action extends React.Component {
  render (){
    return(
    <div>
      <button>what i should do ?</button>
    </div>
   );
  }
}
class Remove extends React.Component {
  render (){
    return(
    <div>
      <button>Remove All</button>
    </div>
   );
  }
}
class Options extends React.PureComponent {
  render (){
    return(
      <div>
      <ul>
        {this.props.options.map((option) =><li><Option optiontext={option}/></li> )}
      </ul>
      </div>
    )
  }
}
class Option extends React.PureComponent {
  render (){
    return(
      <div> 
        <p>{this.props.optiontext}</p>
      </div>
    )
  }
}
class Addoption extends React.Component{
  constructor(props){
    super(props);
    
  }
  handleAddOption(e) {
    e.preventDefault();
    console.log(e.target.elements.option.value)
  }
  render(){
    return(
    <form onSubmit={this.handleAddOption}>
      <input name ="option" type="text"/>
      <button>add option</button>
    </form>
    )
  }
}

export default App ;
