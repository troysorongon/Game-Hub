// import useData from "./useData"; // Going to use static data instead but this category rarely changes
import genres from "../data/genres";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres;