import {createContext } from "react";

const UserContext=createContext();

function UserContextProvider({children}){
    //Recuperar el contexto
    //const user=useContext(nombreContexto)
    const data={
        
    };

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserContextProvider};