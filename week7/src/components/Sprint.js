import React, {Component} from 'react'

class Sprint extends Component {
    constructor(props){
        super(props);
        this.state = {
            sets: 0
        };
    };

    render(){

    return(
        <div>
            <h2> 50 meter sprint {this.state.sets}</h2>
            <button onClick={() => this.setState({sets: this.state.sets + 50 })}>add set</button>
            <button onClick={() => this.setState({sets: 0})}>Reset counter</button>
        </div>

    );
    }
}
export default Sprint;