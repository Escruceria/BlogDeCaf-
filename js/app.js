document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.formulario');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const alertaAnterior = formulario.querySelector('.alerta');
        if (alertaAnterior) {
            alertaAnterior.remove();
        }

        const alerta = document.createElement('p');
        alerta.classList.add('alerta');
        alerta.textContent = 'Gracias por escribirnos. Te responderemos muy pronto.';
        formulario.appendChild(alerta);
        formulario.reset();
    });
});
