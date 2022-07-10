import React, { useEffect, useState } from 'react';

function Button({ children, ...props }) {
    const [className, setClassName] = useState('btn btn-primary');

    useEffect(() => {
        if (props.className) {;
            setClassName(`${props.className} btn btn-primary`);
        }
    }, [props.className]);

    return (
        <button {...{className: '', ...props}} className={ className }>{ children }</button>
    )
}

export { Button };