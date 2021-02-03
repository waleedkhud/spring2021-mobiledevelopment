// Import Component
import Component from './Component.js';






// Article is a child object of Component

    // Send what it gets to its parent object
    class Article extends Component{
 //using super() constructor it specifies they prameters in this file to componet class
      constructor(title, author, text) {
        super(title, author, text);
      }
    

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    //the text will be rendered in its defult form stated in index file
    return `
    <Article>
      ${this.props.title}
      ${this.props.author}
      ${this.props.text}
    </Article>
  `
    ;
    
  }
}


export default Article;
