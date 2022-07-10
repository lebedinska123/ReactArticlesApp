import React from 'react';

function Textarea({labelText, isInvalid, ...props}) {
    let className = `${isInvalid ? 'is-invalid' : ''} ${props.className ?? ''} form-control`;

    return (
        <div className="mt-2">
            {
                labelText && props.id ? <label htmlFor={ props.id }>{ labelText }</label> : ''
            }
            <textarea {...{className: '', ...props}} className={ className }/>
        </div>
    );
}

export default Textarea;