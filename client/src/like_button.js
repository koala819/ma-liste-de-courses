'use strict';

const e = React.createElement;

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
ReactDOM.render(e(LikeButton), domContainer);

//https://fr.reactjs.org/docs/add-react-to-a-website.html
