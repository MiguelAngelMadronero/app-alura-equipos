import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";


const Formulario= (props)=>{

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, actualizarTitulo]= useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (evento) =>{
        evento.preventDefault();
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo=(e)=>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})

    } 

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} actualizarValor={setNombre} />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={setPuesto} />
            <Campo titulo="Foto" placeholder="Ingresar foto" required valor={foto} actualizarValor={setFoto} />
            <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} equipos={props.equipos} />
            {/* <Boton texto="Crear"/> */}
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={actualizarTitulo} />
            <Campo titulo="Color" placeholder="Ingresar el color en Hex" required valor={color} actualizarValor={actualizarColor} type="color" />
       
            <Boton>
                Registrar equipo
            </Boton>
        </form>


    </section>
}

export default Formulario;