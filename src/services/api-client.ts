import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8a68d19a997a46c7bfddb94d2e38bc89'
    }
})