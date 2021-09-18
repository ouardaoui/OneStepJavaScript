import React from "react";

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     // this.handleDelecte=this.handleDelecte.bind(this)
//     this.state =  {
//       options : ["first thing","scond thing","third thing"]
//     }
//   }
//   handleDelecte = () =>  {
//     this.setState({options : []})
//   }
//   handlePick = () => {
//     const randomNum = Math.floor(Math.random() * this.state.options.length)
//     const option = this.state.options[randomNum]
//     alert(option)
//   }
//   handleAddOption(option) {
//     this.setState({
//     options: this.state.options.concat(option)});
//     }
//   render(){
//     const text = {
//       title : "indicision",
//       subtitle : "put your life in the hands of a computer"
//     }
//     return(
//       <div> 
//       <Header title ={text.title} subtitle={text.subtitle}/>
//         <Action handleAction={this.state.options.length == 0} handlePick = {this.handlePick}/>
//         <Remove handleDelecte ={this.handleDelecte}/>
//         <Options options={this.state.options}/>
//         <Addoption handleAddOption={this.handleAddOption}/>
//       </div>
//       )
//   }
// };
// class Header extends React.Component {
//   render(){
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.subtitle}</p>
//       </div>
//     )
//   }
// }
// class Action extends React.Component {
//   render (){
//     return(
//     <div>
//       <button
//       onClick={this.props.handlePick} 
//       disabled={this.props.handleAction}>what i should do ?</button>
//     </div>
//    );
//   }
// }
// class Remove extends React.Component {
//   render (){
//     return(
//     <div>
//       <button onClick={this.props.handleDelecte}>Remove All</button>
//     </div>
//    );
//   }
// }
// class Options extends React.PureComponent {
//   render (){
//     return(
//       <div>
//       <ul>
//         {this.props.options.map((option) =><li><Option optiontext={option}/></li> )}
//       </ul>
//       </div>
//     )
//   }
// }
// class Option extends React.PureComponent {
//   render (){
//     return(
//       <div> 
//         <p>{this.props.optiontext}</p>
//       </div>
//     )
//   }
// }
// class Addoption extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this)
    
//   }
//   handleAddOption(e) {
//     e.preventDefault();

//     const option = e.target.elements.option.value
//     if(option){
//       this.props.handleAddOption(option)
//     }

//   }
//   render(){
//     return(
//     <form onSubmit={this.handleAddOption}>
//       <input name ="option" type="text"/>
//       <button>add option</button>
//     </form>
//     )
//   }
// }

// export default App ;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default App;