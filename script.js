
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

  
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

   
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];

 
    const usuario = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    
    contactos.push(usuario);

 
    localStorage.setItem("contactos", JSON.stringify(contactos));

    
    mostrarContactos();

   
    document.getElementById("contactForm").reset();
});


function mostrarContactos() {
    const contactos = JSON.parse(localStorage.getItem("contactos"));

    if (contactos) {
        const userDataDiv = document.getElementById("userData");
        userDataDiv.innerHTML = "Contactos guardados en Local Storage:<br>";

        contactos.forEach(function (contacto, index) {
            userDataDiv.innerHTML += "<strong>Contacto " + (index + 1) + ":</strong><br>";
            userDataDiv.innerHTML += "Nombre: " + contacto.nombre + "<br>";
            userDataDiv.innerHTML += "Correo: " + contacto.correo + "<br>";
            userDataDiv.innerHTML += "Mensaje: " + contacto.mensaje + "<br><br>";
        });
    }
}

mostrarContactos();


document.getElementById("borrarContactos").addEventListener("click", function () {
    localStorage.removeItem("contactos");
    mostrarContactos();
});

// he sacado esta funcion de esta pagina https://carontestudio.com/blog/como-recargar-una-pagina-con-javascript//
let refresh = document.getElementById('borrarContactos');
refresh.addEventListener('click', _ => {
            location.reload();
})