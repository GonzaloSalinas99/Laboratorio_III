import { empleados } from "../data/datos.js";

console.log(empleados);

function crearTabla(listaDatos)
{
    
        const tabla = document.createElement("table");
    //que genere un THead con todos las keys de los elementos
    tabla.appendChild(crearCabeceraTabla(listaDatos[0]));
    //Que genere el TBody con todos los valores del vector
    tabla.appendChild(crearCuerpoTabla(listaDatos));

        return tabla;
    
    
}

function crearCabeceraTabla(elemento)
{
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    for (const key in elemento) {
        if(key !== "id"){
            const th = document.createElement("th");
        
            //manera mas simple
            th.textContent = key;
            
            
            //creando un nodo texto
            // const contenido = document.createTextNode(key);
            // th.appendChild(contenido);
    
            tr.appendChild(th);
        }
    }

    //obtengo los keys del elemento
    // Object.keys(elemento).forEach(key=>{

        
        
    // });
// //recorro con forin
//     for (const key in elemento) {
//         console.log(key);
//     }
thead.classList.add("cabecera");
    thead.appendChild(tr);
    return thead;
}

function crearCuerpoTabla(lista)
{
    const tbody = document.createElement("tbody");
    


    lista.forEach((elemento,index)=>{

        const tr = document.createElement("tr");
        
        


        tr.classList.add(index % 2? "colorImpar":"colorPar","pointer");


        for (const key in elemento) {
            //para no mostrar el ID
            if(key === "id")
            {
                tr.setAttribute("data-Id",elemento[key]);
            }
            else{
                const td = document.createElement("td");
                td.textContent = elemento[key];
                tr.appendChild(td);
            
            }
            }
        tbody.appendChild(tr);
    });
    return tbody;
}

export default crearTabla;