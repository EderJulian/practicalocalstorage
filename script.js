// Escucha el envío del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtiene los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    // Obtiene la lista de contactos existentes o crea una si no existe
    var contactos = JSON.parse(localStorage.getItem("contactos")) || [];

    // Crea un objeto con los datos del usuario
    var usuario = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    // Agrega el nuevo usuario a la lista de contactos
    contactos.push(usuario);

    // Guarda la lista actualizada en el Local Storage
    localStorage.setItem("contactos", JSON.stringify(contactos));

    // Muestra los contactos guardados en el DOM
    mostrarContactos();

    // Limpia el formulario
    document.getElementById("contactForm").reset();
});

// Función para mostrar los contactos guardados en el DOM
function mostrarContactos() {
    var contactos = JSON.parse(localStorage.getItem("contactos"));

    if (contactos) {
        var userDataDiv = document.getElementById("userData");
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

// Botón para borrar todos los contactos
document.getElementById("borrarContactos").addEventListener("click", function () {
    localStorage.removeItem("contactos");
    mostrarContactos();
});

// he sacado esta funcion de esta pagina https://carontestudio.com/blog/como-recargar-una-pagina-con-javascript//
let refresh = document.getElementById('borrarContactos');
refresh.addEventListener('click', _ => {
            location.reload();
})