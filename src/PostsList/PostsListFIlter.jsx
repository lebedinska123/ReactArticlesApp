import React, { useState, useMemo } from 'react';
import Input from '../shared/Input';

function PostsListFilter({ filters, setFilters }) {
    function sortPosts(event) {
        setFilters((filters) => ({ ...filters, sort: event.target.value }));
    };

    function queryPosts(event) {
        setFilters((filters) => ({...filters, query: event.target.value }));
    };

    return (
        <div className="posts-list__filters">
            <Input value={ filters.query } onChange={ queryPosts } className="mb-2" placeholder="Поиск..."/>
            <select className='mb-2' id="filterPosts" onChange={ sortPosts } value={ filters.sort }>
                <option value="">Фильтр...</option>
                <option value="byName">По названию</option>
                <option value="byAscending">В обратном порядке</option>
            </select>
        </div>
    );
}

export { PostsListFilter };