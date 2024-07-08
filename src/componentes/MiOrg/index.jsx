import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{

    //Estado - hooks
    //useState
    //useState()
    // console.log(useState())
    // const [nombreVariable, actualizarNombre] = useState(valorInicial);
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () =>{
        
    //     console.log("mostrar/ocultar elemento", !mostrar);
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/add.svg" alt="add" onClick={props.cambiarMostrar}/>


    </section>
}

export default MiOrg;