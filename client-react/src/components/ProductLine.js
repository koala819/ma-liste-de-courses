import React from 'react';

function ProductLine(props) {
    const labelClass = props.checked ? "checked" : "";
    const toto = props.checked;

    return (
        <div>
            <input
                id={props.id}
                type='checkbox'
                checked={props.checked}
                onChange={() => !toto}
            />
            <label
              htmlFor={props.id}
              className={labelClass}
            >
                {props.text}
            </label>
        </div>
    )
}

export default ProductLine;
