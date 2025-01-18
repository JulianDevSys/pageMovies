import "./StyleCarritoPeliculas.css"


export default function CarritoPeliculas({peliculas,close}){
  const total = peliculas.reduce((sum, item) => sum + item.price * item.quantity, 0);


    return(
        <div className="carrito-container">
            <div className="close_modal" onClick={close}>X</div>
            {peliculas.length == 0 ?(
                <h2 className="title_carrito">El Carrito esta vacio</h2> 
            ):(
                <div className="carrito-dropdown">


                    <div className="carrito-list">
                        {peliculas.map((element)=>(
                        
                        <div className="carrito-item" key={element.id}> 

                        <div className="img">
                        <img className="img_carrito" src={element.posterUrl}  alt="imagen" /> 
                        </div> 
                        
                        <div className="hola">
                        <div className="descripcion">{element.title} - ${element.price}  - {element.quantity} 
                            </div></div></div>
                        ))}
                    </div>
                    <h3>Total:  ${total.toFixed(2)} </h3>
                     </div>
            )
            
            }

        </div>
    )
}

