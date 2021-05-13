class Product extends React.Component {
    
    render() {
        return(<div>
                <input type="checkbox" checked={this.props.checked} />
                <label>{this.props.text}</label>
               </div>)
    }
}
ReactDOM.render(<Product text='banane' checked={true} />, document.getElementById("produit1"))
ReactDOM.render(<Product text='fraise' checked={false} />, document.getElementById("produit2"))

/*export default Product*/
