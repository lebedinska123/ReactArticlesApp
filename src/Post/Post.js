import React from 'react';
import { Button } from '../shared/Button';
import { useNavigate } from "react-router-dom";

function Post({ post, index, removePost }) {
    const navigate = useNavigate();

    function deletePost(event) {
        let postId = event.target.dataset?.id;
        removePost(oldPostsList => [...oldPostsList].filter((post) => post.id !== +postId));
    }

    return (
        <div className="app__post post">
            <div>
                <h1 className="post__title"> 
                    <span className="post__id">{ index + 1 }.</span>&nbsp;
                    { post.title }
                </h1>
                <p className="post__content">
                    { post.body }
                </p>
            </div>
            <div className="d-flex">
                <Button className="post__open-btn mr-1" data-id={ post.id } onClick={ () => navigate(`/posts/${ post.id }`) }>Открыть</Button>
                <Button className="post__delete-btn" data-id={ post.id } onClick={ deletePost }>Удалить</Button>
            </div>
        </div>
    )
}

export default Post