import {Product} from './Product'

class ProductList extends React.Component {
    
    render() {
        return(<div><Product /></div>)
    }
}
ReactDOM.render(<ProductList />, document.getElementById("produitList"))

