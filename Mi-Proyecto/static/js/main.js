document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // ACCIÓN 1: MOSTRAR UN MENSAJE
    // ==========================================

    const botonMensaje = document.getElementById("btnMensaje");
    const mensaje = document.getElementById("mensaje");

    botonMensaje.addEventListener("click", function () {

        mensaje.textContent =
            "¡Hola! Este mensaje fue generado utilizando JavaScript y el DOM.";

        mensaje.classList.remove("hidden");
    });


    // ==========================================
    // ACCIÓN 2: CAMBIAR CONTENIDO
    // ==========================================

    const botonContenido = document.getElementById("btnContenido");
    const contenido = document.getElementById("contenido");

    botonContenido.addEventListener("click", function () {

        contenido.textContent =
            "¡El contenido de esta página cambió dinámicamente con JavaScript!";

    });


    // ==========================================
    // ACCIÓN 3: MODIFICAR UN ESTILO
    // ==========================================

    const botonEstilo = document.getElementById("btnEstilo");
    const caja = document.getElementById("caja");

    botonEstilo.addEventListener("click", function () {

        caja.classList.toggle("bg-purple-500");
        caja.classList.toggle("bg-red-500");
        caja.classList.toggle("scale-110");

    });

});