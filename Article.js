// Import Component
import Component from './Component.js';
import ArticleTitle from './ArticleTitle';
import ArticleText from './ArticleText';

// Article is a child object of Component
class Article extends Component {

  constructor(props) {
    super(props);
    this.props.title = new ArticleTitle(
      {
        title: this.props.title
      });

    this.props.text = new ArticleText(
      {
       text: this.props.text
      });

  }
    // Send what it gets to its parent object
  

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return `
    <Article>
      <Title>this.props.title</Title>
      <Author>this.props.author</Author>
      <Text>this.props.text</Text>
    </Article>
  `
    ;
    
  }
}


export default Article;
