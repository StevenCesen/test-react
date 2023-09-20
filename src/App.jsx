import { Outlet } from "react-router-dom";
import Header from "./components/Nav/Header";

function App(){
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App;


//this.state para agregar estado de componentes con clase