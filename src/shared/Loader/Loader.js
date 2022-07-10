import React from 'react';
import './styles/loader.css';

export const Loader = function() {

    return (
        <div className="loader">
            <div className="loader__inner">
                <div className="loader__animation"></div>
            </div>
        </div>
    );
}