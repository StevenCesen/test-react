import { useEffect, useState } from "react";
import CardCharacter from "../components/CardCharacter/CardCharacter";
import { useParams } from "react-router-dom";

function Character(){

    const [personaje,setState]=useState();
    const id=useParams();

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}character/${id.id}`)
          .then((resp)=>resp.json())
          .then((data)=>{
            setState(data[0]);
          })
    },[]);

    if(!personaje) return <span>Cargando...</span>

    return(
        <div className="page">
            <h3>Personaje | {id.id}</h3>
            <div className="contentCharacters">
                {   
                    <CardCharacter
                        alive={personaje.alive}
                        gender={personaje.gender}
                        name={personaje.name}
                        image={personaje.image}
                        species={personaje.species}
                        actor={personaje.actor}
                        id={personaje.id}
                    />
                }
            </div>
        </div>
    )
}

export default Character;
