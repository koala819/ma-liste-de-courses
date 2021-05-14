import React from 'react';

class ProductLine extends React.Component {

    render() {
        return(
            <div>
                <input type='checkbox' checked={this.props.checked} />
                <label>{this.props.text}</label>
            </div>)
    }
}

export default ProductLine;