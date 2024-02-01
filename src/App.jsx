import { useState } from "react"
import Formulario from "./Components/Formulario"
import Citas from "./Components/Citas"


function App() {
  let [citas,setCitas] = useState([])

  return (
    <>
      <h1 className="w-full flex justify-center">Llenar el formulario para crear una cita</h1>
      <hr className=" font-bold"/>
      <Formulario setCitas={setCitas} citas={citas}></Formulario>
      {citas.length !== 0 ? <Citas citas={citas} setCitas={setCitas}></Citas> : <h1 className="w-full flex justify-center">No hay citas</h1>}
    </>
  )
}

export default App
