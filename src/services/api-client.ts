import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '15a9f6d9b8094ddb95ad9ac96b4d3b79'
    }
})