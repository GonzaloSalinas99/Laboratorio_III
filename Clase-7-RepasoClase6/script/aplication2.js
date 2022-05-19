import crearTabla from "./tablaDinamica.js";
//import {empleados} from "../data/datos.js"
import Empleado from "./empleado.js";

const empleados = JSON.parse(localStorage.getItem("empleados")) || [];
console.log(empleados);
//retorna un array

ActualizarTabla(empleados);

const $frmEmpleado = document.forms[0];

$frmEmpleado.addEventListener("submit",(e)=>{

    const frm = e.target;
    e.preventDefault();

    //validar los datos
    
    //alta

    //modificacion
    console.log(frm.txtNombre.value);

    const nuevoEmpleado = new Empleado(Date.now(),frm.txtNombre.value,frm.txtEdad.value,frm.txtMail.value,frm.sexo.value);
    empleados.push(nuevoEmpleado);

    localStorage.setItem("empleados",JSON.stringify(empleados));
    ActualizarTabla(empleados);
    
    console.log(nuevoEmpleado);
})


window.addEventListener("click",(e)=>
        {
            if(e.target.matches("tr td"))
            {
                console.log(e.target.parentElement.dataset.id);
            }
        });






function ActualizarTabla(lista){
const container = document.querySelector(".table-container");
    while(container.children.length > 0){
        container.removeChild(container.firstElementChild);
    }
    
        container.appendChild(crearTabla(lista));
    
    
}



