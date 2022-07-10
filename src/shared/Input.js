import React, { forwardRef } from 'react';

const Input = ({labelText, isInvalid, ...props}) => {
    let className = `${isInvalid ? 'is-invalid' : ''} ${props.className ?? ''} form-control`;
    
    return (
        <div className="mt-2">
            { 
                labelText && props.id ? <label htmlFor={ props.id }>{ labelText }</label> : ''
            }
            <input {...{className: '', ...props}} className={ className }/>
        </div>
    );
};

export default Input;