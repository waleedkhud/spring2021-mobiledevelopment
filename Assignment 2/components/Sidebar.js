import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   

    

    let responseHTML = '' ;
    
    this.props.menu.forEach( (item) => {
      

      responseHTML +="<li>"+item+"</li>";

     
     // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });
    //response html to wrap the items with <ul> 
    responseHTML = '<ul>' + responseHTML + "</ul>"; 
    return responseHTML 
    
  }
}

export default Sidebar;
