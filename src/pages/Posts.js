import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Button } from '../shared/Button';

import '../styles/App.css';
import PostsList from '../PostsList/PostsList';
import AddPostForm from '../AddPostForm';
import { Modal } from '../shared/Modal/Modal.jsx';
import { postsService } from "../services/postsService";
import { Loader } from '../shared/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { Pagination } from '../shared/Pagination/Pagination';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [activateModal, setActivateModal] = useState(false);
    const [postsCount, setPostsCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [isScroll, setIsScroll] = useState(false);

    const lastElementInList = useRef();
    const observer = useRef();

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        let response = await postsService.getAll(currentPage, limit);
        let postsCount = response.headers['x-total-count'] ?? 0;

        setPostsCount(postsCount);

        if (isScroll) {
            setPosts([...posts, ...response.data]);
            setIsScroll(false);
        } else {
            setPosts(response.data);
        }
    });

    useEffect(() => {
        if (isPostsLoading) {
            return;
        }

        let pagesCount = +postsCount/limit;

        let callback = function(entries, observer) {
            if (entries[0].isIntersecting && currentPage < pagesCount) {
                setCurrentPage(page => page + 1);
                setIsScroll(true);
            }
        };

        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElementInList.current);

        return () => observer.current.disconnect();
    }, [isPostsLoading]);

    useEffect(() => {
        fetchPosts();
    }, [currentPage]);

    return (
        <div className="app">
            <Modal active={ activateModal } activateModal={ setActivateModal }>
                <AddPostForm addPost={ setPosts } activateModal={ setActivateModal } isModalClosed={ !activateModal }/>
            </Modal>
            <Button onClick={ () => setActivateModal(true) }>Добавить пост</Button>
            {
                postsError && <h1>{ postsError }</h1>
            }
            {
                isPostsLoading && <Loader/>
            }
                    
            <Fragment>
                <PostsList posts={ posts } removePost={ setPosts }/>
                <div ref={lastElementInList} style={{height: '20px'}}/>
                <Pagination totalCount={ postsCount } currentPage={ currentPage } setCurrentPage={ setCurrentPage } limit={ limit } />
            </Fragment>
        </div>
    );
}

export { Posts }