import React from 'react';

function Comment({ commentData }) {

    return (
        <div className="comment">
            <div>
                From: <em>{ commentData.email }</em>
            </div>
            <h3>{ commentData.name }</h3>
            <p>{ commentData.body }</p>
        </div>
    );
}

export { Comment }