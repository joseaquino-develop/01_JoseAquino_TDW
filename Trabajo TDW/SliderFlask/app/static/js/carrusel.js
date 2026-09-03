const slides =
    document.querySelectorAll(".slide");

const botonAnterior =
    document.getElementById("anterior");

const botonSiguiente =
    document.getElementById("siguiente");

const contenedorIndicadores =
    document.getElementById("indicadores");

const slideActual =
    document.getElementById("slideActual");

const totalSlides =
    document.getElementById("totalSlides");

const botonAutoplay =
    document.getElementById("autoplay");


let indiceActual = 0;

let reproduccionAutomatica = true;

let intervalo;


/* TOTAL DE SLIDES */

totalSlides.textContent =
    String(slides.length).padStart(2, "0");


/* CREAR INDICADORES */

slides.forEach((slide, indice) => {

    const indicador =
        document.createElement("button");

    indicador.classList.add("indicador");

    indicador.setAttribute(
        "aria-label",
        `Ir a la imagen ${indice + 1}`
    );

    if (indice === 0) {
        indicador.classList.add("activo");
    }

    indicador.addEventListener(
        "click",
        () => {

            indiceActual = indice;

            mostrarSlide(indiceActual);

            reiniciarIntervalo();
        }
    );

    contenedorIndicadores.appendChild(indicador);
});


const indicadores =
    document.querySelectorAll(".indicador");


/* MOSTRAR SLIDE */

function mostrarSlide(indice) {

    slides.forEach(slide => {
        slide.classList.remove("activo");
    });

    indicadores.forEach(indicador => {
        indicador.classList.remove("activo");
    });

    slides[indice].classList.add("activo");

    indicadores[indice].classList.add("activo");

    slideActual.textContent =
        String(indice + 1).padStart(2, "0");
}


/* SIGUIENTE */

function siguienteSlide() {

    indiceActual++;

    if (indiceActual >= slides.length) {
        indiceActual = 0;
    }

    mostrarSlide(indiceActual);
}


/* ANTERIOR */

function anteriorSlide() {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = slides.length - 1;
    }

    mostrarSlide(indiceActual);
}


/* BOTONES */

botonSiguiente.addEventListener(
    "click",
    () => {

        siguienteSlide();

        reiniciarIntervalo();
    }
);


botonAnterior.addEventListener(
    "click",
    () => {

        anteriorSlide();

        reiniciarIntervalo();
    }
);


/* AUTOPLAY */

function iniciarIntervalo() {

    intervalo =
        setInterval(
            siguienteSlide,
            5000
        );
}


function detenerIntervalo() {

    clearInterval(intervalo);
}


function reiniciarIntervalo() {

    if (reproduccionAutomatica) {

        detenerIntervalo();

        iniciarIntervalo();
    }
}


/* PAUSA / PLAY */

botonAutoplay.addEventListener(
    "click",
    () => {

        reproduccionAutomatica =
            !reproduccionAutomatica;

        if (reproduccionAutomatica) {

            botonAutoplay.textContent = "❚❚";

            botonAutoplay.setAttribute(
                "aria-label",
                "Pausar slider"
            );

            iniciarIntervalo();

        } else {

            botonAutoplay.textContent = "▶";

            botonAutoplay.setAttribute(
                "aria-label",
                "Reproducir slider"
            );

            detenerIntervalo();
        }
    }
);


/* TECLADO */

document.addEventListener(
    "keydown",
    evento => {

        if (evento.key === "ArrowRight") {

            siguienteSlide();

            reiniciarIntervalo();
        }

        if (evento.key === "ArrowLeft") {

            anteriorSlide();

            reiniciarIntervalo();
        }
    }
);


/* INICIAR */

mostrarSlide(indiceActual);

iniciarIntervalo();