import moviesDb from "./movieDb.json"

export default function getMovies(cb){
    cb(moviesDb)
}