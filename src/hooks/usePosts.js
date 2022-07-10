import { useMemo } from "react";

export const useSortedPosts = function(posts, sort) {
    const SortedPosts = useMemo(() => {
        let sortedPosts = posts;

        if (sort === 'byName') {
            sortedPosts = [...posts].sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0);
        } else if (sort === 'byAscending') {
            sortedPosts = [...posts].sort((a, b) => a.title < b.title ? 1 : a.title > b.title ? -1 : 0);
        }

        return sortedPosts;
    }, [sort, posts]);

    return SortedPosts;
}

export const useFilterPosts = function(posts, query) {
    const FilteredPosts = useMemo(() => {
        if (query.length !== 0) {
            const searchRequest = new RegExp(query, 'i');

            return posts.filter(post => post.title.match(searchRequest) !== null);
        } else {
            return posts;
        }
    }, [posts, query]);

    return FilteredPosts;
}

export const usePosts = function(posts, sort, query) {
    let sortedPosts = useSortedPosts(posts, sort);
    let sortedAndFilteredPosts = useFilterPosts(sortedPosts, query);

    return sortedAndFilteredPosts;
}