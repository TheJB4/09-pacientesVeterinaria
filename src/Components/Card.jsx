export default function Card({ cita,citas,setCitas,index }) {
    console.log(cita)
    return (
        <div className="">
            <div className="flex items-center">
                <div className="w-[20px] h-[20px] bg-teal-600 rounded-full"> </div>
                <div className="ml-3">
                    <p>Mascota:{cita.nombre}</p>
                    <p className=" text-sm">dueño:{cita.nombreDueño}</p>
                    <hr />
                </div>
            </div>
            <div className="flex justify-center bg-teal-400 py-1 px-1">
                <form className="flex flex-col w-[100%] justify-center" onSubmit={(e,i)=>{
                    e.preventDefault()
                    
                    setCitas((prevState) => prevState.filter((e,i) => i!==index))
                }
                }>
                    <div className="mb-1">
                        <label htmlFor="fecha" className="text-white">Fecha</label>
                        <input type="text" id="fecha" placeholder="dd/mm/yyyy" value={cita.fecha} className="p-1 border border-gray-300 rounded w-full" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="hora" className="text-white">Hora</label>
                        <input type="text" id="hora" placeholder="hh:mm" value={cita.hora} className="p-1 border border-gray-300 rounded w-full" />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="sintomas" className="text-white">Síntomas</label>
                        <input type="text" id="sintomas" placeholder="describir síntomas" value={cita.sintomas} className="p-1 border border-gray-300 rounded w-full" />
                    </div>

                    <div className="flex justify-end mt-2">
                        <input type="submit" value="Borrar" className="bg-red-500 text-white w-[50%] p-1 rounded cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    )
}