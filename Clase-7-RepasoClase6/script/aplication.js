

const dias = ["lunes","martes","miercoles","jueves","viernes"];
//genera una lista dinamica de LI segun los elementos del array
function crearLista(lista)
{
    const ul = document.createElement("ul");

    lista.forEach((item)=>{
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

    return ul;
}

document.getElementById("meses").appendChild(crearLista(dias));


