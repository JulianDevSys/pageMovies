import { useEffect, useState } from "react"
import useMovieByID from "../hooks/useMovieById"
import "./StyleModalMovies.css"


export default function ModalMovies({ids,close,carritoCompras}){
    const [infoMovies, setInfoMovies]= useState([])

    useEffect(()=>{
        useMovieByID(ids,(res,error)=>{
            if(error){
                alert(error)
                close()
            }
            setInfoMovies(res)
        })
    },[ids,carritoCompras,close])

   
    
    
    return(

        <div className="principal">

            <div className="container_modal">
            <button className="closes_modal" onClick={close}>X</button>
            <p className="title_modal">INFORMACION DE LA PELICULA</p>
            <label htmlFor="title" className="label_modal">Título</label>
            <input className="input_modal" value={infoMovies.title} type="text" placeholder="title" />
            <label htmlFor="title" className="label_modal">Año</label>
            <input className="input_modal" value={infoMovies.year} type="text" placeholder="year" />
            <label htmlFor="title" className="label_modal">Director</label>
            <input className="input_modal" value={infoMovies.director} type="text" placeholder="director" />
            <label htmlFor="title" className="label_modal">Genero</label>
            <input className="input_modal" value={infoMovies.genre} type="text" placeholder="genre" />
            <label htmlFor="title" className="label_modal">Puntuacion</label>
            <input className="input_modal" value={infoMovies.rating} type="text" placeholder="rating" />
            <label htmlFor="title" className="label_modal">Precio</label>
            <input className="input_modal" value={infoMovies.price} type="text" placeholder="price" />
            <button className="agregarCarrito" onClick={()=>carritoCompras(infoMovies)}>Agregar Al Carrito</button>
            </div>
        </div>
    )
}