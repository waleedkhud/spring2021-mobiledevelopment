import Component from "./Component.js";

class ArticleText extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return `
      <p>${this.props.text}</p>
    `;
  }

}

export default ArticleText;
