import React, { useState, useEffect }from 'react';
import './App.css';

function App0() {
    class Toggle extends React.Component {
        constructor(props){
            super(props);
            this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
            this.state = {
                visibility : false
            }
        };
        handleToggleVisibility() {
            this.setState({visibility : !this.state.visibility})

        }
        render(){
            return(
                <div>
                    <h1>visibility Toggle</h1>
                    <button onClick={this.handleToggleVisibility}>{this.state.visibility ?  "hide details" : "show details"}</button>
                    {this.state.visibility &&
                        <div> 
                            <p>hey ,these are some details you can now see!</p>
                        </div>
                    };
                </div>
            );
        };
    };
    return(
        <Toggle />
    )

};


export default App0;
