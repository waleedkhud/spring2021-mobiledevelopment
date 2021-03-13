import React, {Component} from 'react'

class Squats extends Component {
    constructor(props){
        super(props);
        this.state = {
            sets: 0
        };
    };

    render(){
//this will return the total calories of burned on per 12 squats
//according to studies 100 squads burns 31.7 calories
        return(
        <div>
            <h2> Squats sets: {this.state.sets+ " " +  "calories"}</h2>
            <p>preforme 12 squats each set</p>
            <button onClick={() => this.setState({sets: this.state.sets + 3.84 })}>add set</button>
            <button onClick={() => this.setState({sets: 0})}>Reset counter</button>
        </div>

        );
    }
};
export default Squats;