'use strict';

/*const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    // Affiche un bouton « J’aime »
return (
  <button onClick={() => this.setState({ liked: true })}>
    J’aime
  </button>
);
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);*/
class HelloWorld extends React.Component {
  render() {
    // Tells React what HTML code to render
    return <h1>Hello World</h1>
  }
}

//  Dis à React d'attacher le composant <HelloWorld> à la balise HTML DIV nommée 'root'
ReactDOM.render(<HelloWorld />, document.getElementById("like_button_container"))

//https://fr.reactjs.org/docs/add-react-to-a-website.html
