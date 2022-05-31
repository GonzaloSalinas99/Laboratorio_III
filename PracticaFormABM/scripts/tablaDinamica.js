


function CrearTabla(lista)
{
    console.log(lista + "Lista");
    const tabla = document.createElement("table");
    //Creo la cabecera de la tabla
    tabla.appendChild(CrearCabecera(lista[0]));
    //creo el cuerpo de la tabla
    tabla.appendChild(CrearCuerpo(lista));

    return tabla;
}

//recibo primer elemento de la lista para crear las columnas con los atributos del elemento
function CrearCabecera(elemento){
    const $thead = document.createElement("thead");
    const $tr = document.createElement("tr");

    for (const key in elemento) {
        if(key !== "id")
        {
            const $th = document.createElement("th");
            $th.textContent = key;
            $tr.appendChild($th);
        }
    }
    $thead.appendChild($tr);
    return $thead;
}

function CrearCuerpo(lista){
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

export default CrearTabla;