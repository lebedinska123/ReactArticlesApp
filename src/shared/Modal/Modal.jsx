import React from 'react';
import PropTypes from 'prop-types';
import './styles/modal.css';

import { Button } from '../Button';

function Modal({active, activateModal, ...props}) {
    let className = `${props.className} modal ${active ? 'active' : ''}`;

    return (
        <div className={ className } onClick={ () => activateModal(false)}>
            <div className='modal__body' onClick={ (event) => event.stopPropagation() }>
                { props.children }
                <Button className="mt-2" onClick={ () => activateModal(false) }>Закрыть</Button>
            </div>
        </div>
    );

}

Modal.propTypes = {
    active: PropTypes.bool,
};

export { Modal };