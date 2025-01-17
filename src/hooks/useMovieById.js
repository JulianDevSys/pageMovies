import movieDb from "./movieDb.json"


export default function useMovieByID(ids,callback){
    const movies= movieDb.find((element)=>element.id==ids)
    if(!movies){
        return callback(undefined,"No se encontro la pelicula")
    }
        const {id,posterUrl,...resto}=movies
        callback(resto)
    
}