import { useState } from "react"
import getMovies from "../hooks/getMovies"
import { useEffect } from "react"
import ModalMovies from "./ModalMovies"
import "./StyleMovies.css"
import CarritoPeliculas from "../carritoCompras/CarritoPeliculas"

export default function Movies(){
    const [traerMovies, setTraerMovies]=useState([])
    const [modal, setModal]=useState([])
    const [search, setSearch]=useState("")
    const [carritoPelicula, setCarritoPelicula]=useState(()=>{
            /* local storage */
    const saveProducts= localStorage.getItem("carritoPelicula")
    return saveProducts? JSON.parse(saveProducts):[]
    })

    const [modalCarrito, setModalCarrito]=useState([])

    
    useEffect(()=>{
        getMovies((res)=>{
            setTraerMovies(res)
        })
    },[])    

    /* local storage */
    useEffect(() => {
        localStorage.setItem("carritoPelicula", JSON.stringify(carritoPelicula));
      }, [carritoPelicula]);
    
    

    const save=traerMovies.filter((word)=>word.title.toLowerCase().includes(search.toLowerCase()))

    const carritoCompras=(pelicula)=>{
        const movieFind = carritoPelicula.find((element)=> element.id== pelicula.id)
        if(movieFind){
            setCarritoPelicula(carritoPelicula.map((item)=> 
            item.id == pelicula.id ?{...item, quantity: item.quantity +1}: item))
        }else{
            setCarritoPelicula([...carritoPelicula,{... pelicula, quantity:1}])
        }
    }

    const deleteProduct=(id)=>{
        setCarritoPelicula((element)=>element.filter((item)=> item.id !==id))
    }




    return(

        <div className="container">
            
            <div className="buscador">
            <input className="search_movies" type="search" placeholder="Escriba el nombre de la pelicula" onChange={(e)=> setSearch(e.target.value)}></input>
             

            <div className="title_movie">
            <p className="titulo">Las Mejores Pelis</p>
            </div>


            <button
        className="carrito-btn"
        onClick={() => setModalCarrito(<CarritoPeliculas  peliculas={carritoPelicula} close={()=> setModalCarrito([])} deleteProduct={ deleteProduct}/>)
        } >
        🛒 
      </button>

        </div>
        {modalCarrito}
        {modal}
        
            <div className="container_movies">
            
            {save.map((element)=>{
                return(
                   <div className="presentation_movies"> 
                <img className="movies" key={element.id} src={element.posterUrl} alt={element.title} /> 
                <button className="btn_detalles"onClick={()=>{
                    setModal(<ModalMovies  ids={element.id} close={()=>setModal([])} carritoCompras={()=>carritoCompras(element)} />)
                }}>DETALLES</button>
                </div>)

            })}
</div>
        </div>
    )
}