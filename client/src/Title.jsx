class Title extends React.Component {
  render() {
    // Tells React what HTML code to render
    return <h1> Ma liste de courses </h1>
  }
}
ReactDOM.render(<Title />, document.getElementById("myTitle"))
