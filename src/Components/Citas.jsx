import Card from "./Card";

export default function Citas({citas,setCitas}){
    return(
        <div className="grid grid-cols-4 gap-4">
            {citas.map((cita,index) => (
                <Card cita={cita} citas={citas} setCitas={setCitas} index={index}/>
            ))}
        </div>
    )
}