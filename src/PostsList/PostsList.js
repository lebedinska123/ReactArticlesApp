import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import { PostsListFilter } from './PostsListFIlter.jsx'; 
import { usePosts } from '../hooks/usePosts';

function PostsList({posts, removePost}) {
    const [filters, setFilters] = useState({sort: '', query: ''});
    let filteredPosts = usePosts(posts, filters.sort, filters.query);

    return (
        <div className="posts-list">
            <h1 className="mb-2">Список постов</h1>
            <PostsListFilter postsList={ posts } filters={ filters } setFilters={ setFilters }/>
            {
                filteredPosts.length === 0 ? <p>Список постов пуст...</p> : 
                filteredPosts.map((post, index) => 
                    <Post post={ post } index={ index } key={ post.id } removePost={ removePost }/>
                )
            }
        </div>
    );
}

PostsList.propTypes = {
    posts: PropTypes.array,
    removePost: PropTypes.func,
};

export default PostsList;