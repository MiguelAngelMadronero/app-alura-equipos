import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css'
import Header from './componentes/Header/Header.jsx'
import Formulario from './componentes/Formulario/Formulario.jsx'
import MiOrg from './componentes/MiOrg/index.jsx'
import Equipo from './componentes/Equipo/index.jsx';
import Footer from './componentes/Footer/index.jsx';

function App() {

  const[mostrarFormulario, actualizarMostrar]=useState(false);
  const[colaboradores, actualizarColaboradores]=useState([
    { 
      id:uuid(),
      nombre:"Miguel Ángel",
      puesto:"Desarrollador",
      foto:"https://avatars.githubusercontent.com/u/113205022?s=96&v=4",
      equipo:"Front End",
      fav:true
    },

    {  
      id:uuid(),
      nombre:"Jeanmarie Quijada",
      puesto:"Desarrollador",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      equipo:"Front End",
      fav:false
    },

    {  
      id:uuid(),
      nombre:"Jose Gonzalez",
      puesto:"Desarrollador",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      equipo:"Front End",
      fav:false
    },

    {  
      id:uuid(),
      nombre:"Miguel Ángel",
      puesto:"Desarrollador",
      foto:"https://avatars.githubusercontent.com/u/113205022?s=96&v=4",
      equipo:"Programación",
      fav:true
    },

    { 
      id:uuid(), 
      nombre:"Jeanmarie Quijada",
      puesto:"Desarrollador",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      equipo:"Programación",
      fav:false
    },

    {  
      id:uuid(),
      nombre:"Jose Gonzalez",
      puesto:"Desarrollador",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      equipo:"Programación",
      fav:true
    },

    {
      id:uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:true
    },
 
    {
      id:uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:true
    },
    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Alura Instructor",
      fav:true
    },
    {
      id:uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:true
    }

    
  ]);

  const[equipos, actualizarEquipos]=useState([

    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario:"#D9F7E9"

    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"

    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:"#F0F8E2"

    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario:"#FDE7E8"

    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario:"#FAE9F5"

    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario:"#FFF5D9"

    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario:"#FFEEDF"

    },
])


  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar Colaborador

  const eliminarColaborador = (id) => {
    console.log("eliminar Colaborador", id)
    const nuevosColaboradores=colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados=equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario=color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo

  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }


  //Dar like
  const like = (id) =>{
    console.log("like :" ,id )
    const colaboradoresActualizados=colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)

  }

  return (
    <>
    <Header/>

    {/* {mostrarFormulario ? <Formulario/> : <></> } */}
    {mostrarFormulario && <Formulario  
    equipos={equipos.map(equipo=>equipo.titulo)}
    registrarColaborador={registrarColaborador}
    crearEquipo={crearEquipo}
    />}
    
    <MiOrg cambiarMostrar={cambiarMostrar}/>
    {/* <Equipo equipo="Programación"/>
    <Equipo equipo="Front End"/>
    <Equipo equipo="Data Science"/>
    <Equipo equipo="Devops"/>
    <Equipo equipo="UX y Diseño"/>
    <Equipo equipo="Móvil"/>
    <Equipo equipo="Innovación y Gestión"/> */}
    
    {equipos.map((equipo) => <Equipo 
    datos={equipo} 
    key={equipo.titulo} 
    colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
    eliminarColaborador={eliminarColaborador}
    actualizarColor={actualizarColor}
    like={like}
    />)}
    <Footer/>
    </>
  )
}

export default App


