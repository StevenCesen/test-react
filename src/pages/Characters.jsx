import { useEffect, useState } from "react";
import CardCharacter from "../components/CardCharacter/CardCharacter";

function Characters(){

    const [personajes,setState]=useState();

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}characters`)
          .then((resp)=>resp.json())
          .then((data)=>{
            setState(data);
          })
    },[]);

    if(!personajes) return <span>Cargando...</span>

    return(
        <div className="page">
            <h3>Personajes | Harry Potter</h3>
            <div className="contentCharacters">
                {   
                    personajes.map(({id,alive,gender,name,image,species,actor})=>
                        <CardCharacter
                            key={id}
                            alive={alive}
                            gender={gender}
                            name={name}
                            image={image}
                            species={species}
                            actor={actor}
                            id={"/character/"+id}
                        />
                    )}
            </div>
        </div>
    )
}

export default Characters;
