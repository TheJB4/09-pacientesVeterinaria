import { useState } from "react"

export default function Formulario({setCitas,citas}){
    let [data,setData] = useState({})
    return(
        <div className="bg-teal-400">
        <form className="bg-teal-400 container mx-auto px-4 flex flex-col justify-around flex-wrap pt-5" onSubmit={(e)=>{
            e.preventDefault()

            setCitas([...citas, data])
        }}>
          <div className="mb-4 flex">
            <label htmlFor="nombre" className="block w-[100px] mr-2">Nombre de la mascota</label>
            <input type="text" id="nombre" className="p-2 border border-gray-300 rounded" placeholder="Dibu" onChange={(e)=>{
                setData({
                    ...data,
                    [e.target.id]: e.target.value
                })
            }}/>
          </div>
          <div className="mb-4 flex">
            <label htmlFor="nombreDueño" className="block w-[100px] mr-2">Nombre del dueño</label>
            <input type="text" id="nombreDueño" className="p-2 border border-gray-300 rounded" placeholder="Juan"  onChange={(e)=>{
                setData({
                    ...data,
                    [e.target.id]: e.target.value
                })
            }}/>
          </div>
        <div className="flex">
        <div className="mb-4 flex">
            <label htmlFor="fecha" className="block w-[100px] mr-2">Fecha</label>
            <input type="text" id="fecha" className="p-2 border border-gray-300 rounded" placeholder="dd/mm/yy"  onChange={(e)=>{
                setData({
                    ...data,
                    [e.target.id]: e.target.value
                })
            }}/>
          </div>
          <div className="mb-4 flex">
            <label htmlFor="hora" className="block mr-2">Hora</label>
            <input type="text" id="hora" className="p-2 border border-gray-300 rounded" placeholder="hh:mm" onChange={(e)=>{
                setData({
                    ...data,
                    [e.target.id]: e.target.value
                })
            }}/>
          </div>
        </div>
          <div className="mb-4 flex">
            <label htmlFor="sintomas" className="block w-[100px] mr-2">Síntomas</label>
            <input type="text" id="sintomas" className="p-2 border border-gray-300 rounded"  placeholder="Describir Sintomas"  onChange={(e)=>{
                setData({
                    ...data,
                    [e.target.id]: e.target.value
                })
            }}/>
          </div>
          <div className="w-full flex justify-center mb-2">
            <input type="submit" value="Agregar nueva cita" className="bg-teal-500 text-white p-2 rounded cursor-pointer" />
          </div>
        </form>
      </div>
    )
}