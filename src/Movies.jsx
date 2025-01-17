import { useState } from "react"
import getMovies from "./hooks/getMovies"
import { useEffect } from "react"
import ModalMovies from "./ModalMovies"
import "./StyleMovies.css"

export default function Movies(){
    const [traerMovies, setTraerMovies]=useState([])
    const [modal, setModal]=useState([])
    const [search, setSearch]=useState("")
    
    useEffect(()=>{
        getMovies((res)=>{
            setTraerMovies(res)
        })
    },[])    

    

    const save=traerMovies.filter((word)=>word.title.toLowerCase().includes(search.toLowerCase()))



    return(

        <div className="container">
            
            <div className="buscador">
            <input className="search_movies" type="search" placeholder="Escriba el nombre de la pelicula" onChange={(e)=> setSearch(e.target.value)}></input>
             

            <div className="title_movie">
            <p className="titulo">Las Mejores Pelis</p>
            </div>
        </div>
        {modal}
            <div className="container_movies">
            
            {save.map((element)=>{
                return(
                   <div className="presentation_movies"> 
                <img className="movies" key={element.id} src={element.posterUrl} alt={element.title} /> 
                <button className="btn_detalles"onClick={()=>{
                    setModal(<ModalMovies  ids={element.id} close={()=>setModal([])}/>)
                }}>DETALLES</button>
                </div>)

            })}
</div>
        </div>
    )
}