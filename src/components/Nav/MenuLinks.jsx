import { NavLink } from "react-router-dom";

function MenuLinks(){
    return (
        <div>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/character">Personajes</NavLink>
            <NavLink to="/spells">Hechizos</NavLink>
        </div>
    );
}

export default MenuLinks;