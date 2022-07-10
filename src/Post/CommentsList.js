import React, {useEffect, useState} from 'react';
import {Comment} from "./Comment";
import {Loader} from "../shared/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {postsService} from "../services/postsService";

function CommentsList({ postId }) {
    const [comments, setComments] = useState(null);

    const [fetchPostComments, isCommentsLoaded, commentsError] = useFetching(async (postId) => {
        let comments = await postsService.getPostComments(postId);
        setComments(comments.data);
    });

    useEffect(() => {
        fetchPostComments(postId);
    }, []);


    return (
        <div>
            <h2>Комментарии</h2>
            <div>
                {
                    comments ? (comments.length > 0 ?
                        comments.map((comment) => {
                            return <Comment commentData={comment} key={comment.id}/>
                        }) : 'Комментариев нет') : <Loader/>
                }
            </div>
        </div>
    );
}

export { CommentsList }