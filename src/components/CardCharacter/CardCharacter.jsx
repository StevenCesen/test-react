import { Link } from "react-router-dom";
import "./CardCharacter.css";

function CardCharacter({name,gender,species,alive,actor,image,id}){
    
    if(image==='') return <></>

    return(
        <div className="character">
            <h4>{name} | {gender}</h4>
            <div>
               <img src={image}/>
            </div>
            <span>{species}</span>
            <div>
                <span>{actor}</span>
                <span>{(alive) ? "VIVO" : "MUERTO"}</span>
                <Link to={id}>Ver detalles</Link>
            </div>
        </div>
    );
}

export default CardCharacter;