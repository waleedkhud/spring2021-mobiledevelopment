import React, {Component} from 'react'
//this pass props from it's parent Component 
class Jumprope extends Component {
    constructor(props){
        super(props);
        this.state = {
            sets: 0
        };
    };

    render(){
//this will return the total calories of burned on 1 min on each set
//according to studies 100 rope jumps per min burn 12.6 calories
    return(
        <div>
            <h2> 1 min jumping rops {this.state.sets + " " +  "calories"}</h2>
            <p>try to skip 100 times in a min </p>
            <button onClick={() => this.setState({sets: this.state.sets + 12.6 })}>add set</button>
            <button onClick={() => this.setState({sets: 0 })}>Reset counter</button>
        </div>

    );
    }
}
export default Jumprope;