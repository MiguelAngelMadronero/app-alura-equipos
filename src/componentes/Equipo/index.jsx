import Colaborador from "../Colaborador";
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{

    const {colorPrimario, colorSecundario, titulo, id}=props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like}=props;

    const bordeTitulo={borderColor: colorPrimario}
    const colorFondo={backgroundColor: hexToRgba(colorPrimario, 0.1 )};
    return <>{ colaboradores.length>0 &&
         <section className="equipo" style={colorFondo}>
            <input 
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(event)=>{
                    actualizarColor(event.target.value, id)
                }}
            />

        <h3 style={bordeTitulo}>{titulo}</h3>

        <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
                
            }

        </div>
    </section>}</> 
}

export default Equipo;