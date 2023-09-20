import CardUser from "./components/CardUser/CardUser";
import { useEffect } from "react";

function Home(){
  
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}characters`)
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data)
      })
  },[]);

  

  return (
    <>
      <div>
        <h1>Listado de estudiantes</h1>
        <ul>
          <li>
            <CardUser
              name="Steven Cesen"
              ci="1150575338"
              telf="0978950498"
            />
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home;