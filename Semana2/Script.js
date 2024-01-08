function agregarTarea()
{
    var tarea = document.getElementById("Nueva-Tarea").value;
    var nuevoItem= document.createElement("li");
    nuevoItem.textContent=tarea;
    document.getElementById("tarea-lista").appendChild(nuevoItem);
    document.getElementById("Nueva-Tarea").value=" ";
}