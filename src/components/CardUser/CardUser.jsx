import { useState,useEffect,useRef} from "react"; //HOOK DE REACT
import "./CardUser.css";

function CardUser({name,ci,telf}){
    //useState devuelvo un array, 0=> estado del componente, 1=> función para actualizar el estado
    const [state, setState]=useState({
        numero1:100
    });

    useEffect(()=>{
        console.log(new Date().getTime())
    })

    const miReferencia=useRef(); //Para capturar elementos del DOM virtual

    const setNumber1=(e)=>{
        setState({
            ...state, //Solo si existe más variables de estado
            numero1:e.target.value
        })
    }

    return (
        <div>
            <input 
                value={state.numero1}
                onChange={setNumber1}
            />
            <p>Nombre: {name}</p>
            <span ref={miReferencia}>Ci: {ci}</span>
            <cite>Telf: {telf}</cite>
            <p>Número digitado: {state.numero1}</p>
            <button onClick={()=>{
                miReferencia.current.classList.toggle("active")
            }}>Desactivar</button>
        </div>
    );
}

export default CardUser;