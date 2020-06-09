function ocultar(){
    document.getElementById('mensaje').style.display="none";
}

function mostrar(){
    document.getElementById('mensaje').style.display="block";
    document.getElementById('contenido').style.display="none";
    document.getElementById("recipient-name").value = "";
    document.getElementById("recipient-email").value = "";
    document.getElementById("recipient-mensaje").value = "";
    document.getElementById('nuevo').style.display="block";
}
function nuevo(){
    document.getElementById('contenido').style.display="block";
    document.getElementById('nuevo').style.display="none"
    document.getElementById('mensaje').style.display="none";
}
