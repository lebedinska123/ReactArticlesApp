import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { Loader } from "../shared/Loader/Loader";
import { postsService } from "../services/postsService";
import { CommentsList } from "../Post/CommentsList";

function Post({ postId }) {
    const params = useParams();
    const [postData, setPostData] = useState(null);

    const [fetchPost, isPostLoaded, postError] = useFetching(async (postId) => {
        let postData = await postsService.getById(postId);
        setPostData(postData.data);
    });

    useEffect(() => {
        fetchPost(params.id);
    }, []);

    return (
        <div className="app">
            <h1>Пост #{ params.id }</h1>
            {
                postData ?
                    <div>
                        <h2>{ postData.title }</h2>
                        <p>{ postData.body }</p>
                    </div> : <Loader/>
            }
            <hr/>
            <CommentsList postId={ params.id }/>
        </div>
    );
}

export { Post }