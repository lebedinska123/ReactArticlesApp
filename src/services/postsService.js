import axios from "axios";

class postsService {
    static async getAll(page, limit) {
        let response = await axios('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,
            }
        });
        
        return response;
    }

    static async getById(id) {
        let response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`) ;

        return response;
    }

    static async getPostComments(id) {
        let response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

        return response;
    }
}

export { postsService };