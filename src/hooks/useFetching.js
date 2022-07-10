import { useState } from "react"

export const useFetching = function(callback) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetching(...params) {
        try {
            setIsLoading(true);
            await callback(...params);
        } catch(error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}