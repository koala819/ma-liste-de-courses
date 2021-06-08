import React from 'react';

function ProductLine({ id, checked, text, onProductCheck }) {
    const labelClass = checked ? "checked" : "";

    return (
        <div>
            <input
                id={id}
                type='checkbox'
                checked={checked}
                onChange={() => onProductCheck(id)}
            />
            <label
              htmlFor={id}
              className={labelClass}
            >
                {text}
            </label>
        </div>
    )
}

export default ProductLine;
