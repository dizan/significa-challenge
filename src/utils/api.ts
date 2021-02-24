import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/?apikey=7981281';

export const api = {
    async search(title: string, page?: number) {
        const result = await axios.get(API_URL, {
            params: {
                s: title,
                page,
            },
        });

        return result.data;
    },
};
