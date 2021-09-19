
import React from "react";
function App1(){
    class Counter extends React.Component {
        constructor(props){
            super(props);
            this.handleAddone =this.handleAddone.bind(this);
            this.handleMinusOne =this.handleMinusOne.bind(this);
            this.handleReset= this.handleReset.bind(this);
            this.state = {
                count : 0
            }
        }
        handleAddone() {
            this.setState({count: this.state.count + 1})
        }
        handleMinusOne() {
            this.setState({count: this.state.count - 1})
        }
        handleReset() {
            this.setState({count: 0})
        }
        render(){
            
            return(
                <div>
                    <h1>count : {this.state.count}</h1>
                    <button onClick={this.handleAddone}>+1</button>
                    <button onClick={this.handleMinusOne}>-1</button>
                    <button onClick={this.handleReset}>reset</button>
                </div>
            );
        }
    }
    return(
        <Counter/>
    )
};

export default App1;