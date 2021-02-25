import React, {Component} from 'react'

class Squats extends Component {
    constructor(props){
        super(props);
        this.state = {
            sets: 0
        };
    };

    render(){

    return(
        <div>
            <h2> squats sets: {this.state.sets}</h2>
            <button onClick={() => this.setState({sets: this.state.sets + 1})}>add set</button>
            <button onClick={() => this.setState({sets: 0})}>Reset counter</button>
        </div>

    );
    }
}
export default Squats;