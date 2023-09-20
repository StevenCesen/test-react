import { useParams } from "react-router-dom";

function CardSpell(){
    const id=useParams();
    return(
        <h2>El hechizo seleccionado es {id.id}</h2>
    );
}

export default CardSpell;