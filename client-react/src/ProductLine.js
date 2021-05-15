import React from 'react';

function ProductLine(props) {
    return (
        <div>
            <input type='checkbox' checked={props.checked} />
            <label>{props.text}</label>
        </div>
    )
}

export default ProductLine;