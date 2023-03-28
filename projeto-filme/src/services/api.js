
import axios from 'axios';
//api.themoviedb.org/3/movie/550?api_key=619340e7b1818392416a8d617bb887a2

//api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
//api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=pt-BR&page=1

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;