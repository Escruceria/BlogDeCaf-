document.addEventListener('DOMContentLoaded', function () {
    // Busca el formulario solo cuando existe en la página actual.
    const formulario = document.querySelector('.formulario');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', function (evento) {
        // Evita recargar la página porque el proyecto no tiene backend.
        evento.preventDefault();

        // Usa la validación nativa del navegador para campos requeridos y email.
        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        // Elimina mensajes anteriores para mostrar una sola confirmación.
        const alertaAnterior = formulario.querySelector('.alerta');
        if (alertaAnterior) {
            alertaAnterior.remove();
        }

        // Muestra una respuesta amable al usuario y limpia el formulario.
        const alerta = document.createElement('p');
        alerta.classList.add('alerta');
        alerta.textContent = 'Gracias por escribirnos. Te responderemos muy pronto.';
        formulario.appendChild(alerta);
        formulario.reset();
    });
});
