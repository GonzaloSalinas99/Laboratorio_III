import Jugador from "./Jugador.js";
import CrearTabla from "./tablaDinamica.js";
//import { Jugadores as listaJugadores } from "../Json/Lista.js";
import Persona from "./Persona.js";

const container = document.querySelector(".table-container");
const form = document.forms[0];
const jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];
RefrescarTabla();

window.addEventListener("click",(e)=>{

    if(e.target.matches("td")){
        const id = e.target.parentElement.dataset.id;
    }
});

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    console.log("Enviado...");

    const {txtId,NombreJugador,ApellidoJugador,EdadJugador,SexoJugador,
        PosicionJugador,SalarioJugador,PieDominanteJugador} = form;

        const formJugador = new Jugador(txtId.value,NombreJugador.value,ApellidoJugador.value,
            EdadJugador.value,SexoJugador.value,PosicionJugador.value,SalarioJugador.value,PieDominanteJugador.value);
            console.log(formJugador);
    if(formJugador.id==='')
    {
        //ALTA
        formJugador.id = ObtenerID();
        handlerCreate(formJugador);
    }
    else{
        //MODIFICACION
        handlerUpdate(formJugador);
    }
    form.reset();
});

const handlerCreate =(NuevaPersona)=>{
    jugadores.push(NuevaPersona);
    RefrescarStorage(jugadores);
    RefrescarTabla();
    
}

const handlerUpdate = (personaEditada)=>{

}

const handlerDelete = (id)=>{

}

const ObtenerID = ()=>{
    let id = 1;

    if(jugadores.length > 0)
    {
        id = jugadores.length;
        id++;
    }
    return id;
}


function RefrescarTabla(){
    while(container.hasChildNodes())
    {
        container.removeChild(container.firstElementChild);
    }
    const data = JSON.parse(localStorage.getItem("jugadores"));
    if(data)
    {
        container.appendChild(CrearTabla(data))

    }
}

const RefrescarStorage = (data)=>{
    localStorage.setItem("jugadores",JSON.stringify(data));
}




// const listaJugadores = JSON.parse(localStorage.getItem("listaJugadores")) || [];
// const frmJugador = document.forms[0];
// //actualizarTabla(listaJugadores);
// //actualizarTabla();


// window.addEventListener("click",(e)=>{

//     if(e.target.matches("td"))
//     {
//         console.log(e.target.parentElement.dataset.id);
//         let idJugador = e.target.parentElement.dataset.id;
        
//         console.log(listaJugadores.find((jugador)=>jugador.id == idJugador));


//         CargarFormulario(listaJugadores.find((jugador)=>jugador.id == idJugador));
//     }

// })

// frmJugador.addEventListener("submit",(e)=>{

//     e.preventDefault();
//     const {txtId,NombreJugador,ApellidoJugador,EdadJugador,SexoJugador,PosicionJugador,SalarioJugador,PieDominanteJugador} = frmJugador;
    
    

//     const jugador = new Jugador(txtId.value,NombreJugador.value,
//         ApellidoJugador.value,EdadJugador.value,
//         SexoJugador.value,PosicionJugador.value,SalarioJugador.value,
//         PieDominanteJugador.value);
//         console.log("alta de " +jugador);


//     if(Validacion(jugador))
//     {

//         if(txtId.value === '')
//         {
//             jugador.id = ObtenerNuevoId();
//             Alta(jugador);
//             //ALTA
//         }
//         else{
//             Modificar(jugador);
//         }
//     }
    
//     LimpiarFormulario(frmJugador);

// });


// function CargarFormulario(jugador)
// {
//     const {txtId,NombreJugador,ApellidoJugador,EdadJugador,SexoJugador,PosicionJugador,SalarioJugador,PieDominanteJugador} = frmJugador;
    
//     txtId.value = jugador.id;
//     NombreJugador.value = jugador.nombre;
//     ApellidoJugador.value = jugador.apellido;
//     EdadJugador.value = jugador.edad;
//     SexoJugador.value = jugador.sexo;
//     PosicionJugador.value = jugador.posicion;
//     SalarioJugador.value = jugador.salario;
//     PieDominanteJugador.value = jugador.pieDominante;
// }


// function Modificar(jugador)
// {
//     if(Validacion(jugador))
//     {
        
//         if(confirm("¿Seguro que quiere modificar sus datos?"))
//         {
//             let index = listaJugadores.findIndex((i)=>{
//                 return i.id === parseInt(jugador.id);
//             });


//             listaJugadores.splice(index,1,jugador);
//             AlmacenarDato(jugador);
            
//         }

        
//     }
// }


// const Alta=(NuevaPersona)=>{
//     console.log(NuevaPersona)
//         listaJugadores.push(NuevaPersona);
//         AlmacenarDato(NuevaPersona);
//         actualizarTabla();
//         LimpiarFormulario(frmJugador);

// }

// function Validacion(persona)
// {       
//     let error = 0;
//     if(persona.nombre == "")
//     {
//         error = 1;
//     }
//     if(persona.apellido == "")
//     {
//         error = 1;
//     }
//     if(persona.edad < 18 || persona.edad > 65)
//     {
//         error = 1;
//     }
//     if(persona.sexo == "")
//     {
//         error = 1;
//     }
//     if(persona.posicion == "")
//     {
//         error = 1;
//     }
//     if(persona.salario < 1000)
//     {
//         error = 1;
//     }
//     if(persona.pieDominante == "")
//     {
//         error = 1;
//     }

//     if(error === 1)
//     {
//         alert("Uno o mas campos estan incompletos.");
//         return false;
//     }
//     return true;
// }



// function ObtenerNuevoId()
// {
    
//         let id = 1;
      
//         if (listaJugadores.length != 0) {
//           const lastItem = listaJugadores[listaJugadores.length - 1];
//           id = parseInt(lastItem.id + 1);
//         }
      
//         return id;
      
// }

// function AlmacenarDato(dato)
// {
//     localStorage.setItem("listaJugadores",JSON.stringify(dato));
// }


// function actualizarTabla(jugadores)
// {
//     while(container.hasChildNodes())
//     {
//         container.removeChild(container.firstElementChild);
//     }

//     const data = JSON.parse(localStorage.getItem("listaJugadores"));
//     if(data)
//     {
//         console.log(data);
//         container.appendChild(CrearTabla(data));
//     }
// }

// function LimpiarFormulario(frm)
// {
//     frm.reset();
// };
