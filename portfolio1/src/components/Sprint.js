import React, {Component} from 'react'

class Sprint extends Component {
    constructor(props){
        super(props);
        this.state = {
            sets: 0
        };
    };
//  
    render(){
//this will return the total calories of burned on per 50 meter sprint
//according to studies 100 meter of maximum power sprint burns 10 calories
    return(
        <div>
            <h2> 50 meter sprint: {this.state.sets + " " +  "calories"}</h2>
            <p>Sprint as fast as you could</p>
            
            <button onClick={() => this.setState({sets: this.state.sets + 5})}>add set</button>
            <button onClick={() => this.setState({sets: 0})}>Reset counter</button>
            
        </div>

    );
    }
}
export default Sprint;