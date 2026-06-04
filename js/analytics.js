document.addEventListener('DOMContentLoaded', function () {
    // Identifica la página actual para registrar una visita local.
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';

    // Guarda el historial en el navegador sin enviar información a servicios externos.
    const claveAnalitica = 'blogdecafe_visitas';
    const visitasGuardadas = JSON.parse(localStorage.getItem(claveAnalitica)) || {};

    // Incrementa el contador de visitas de la página abierta.
    visitasGuardadas[paginaActual] = (visitasGuardadas[paginaActual] || 0) + 1;
    localStorage.setItem(claveAnalitica, JSON.stringify(visitasGuardadas));

    // Muestra el registro en consola para revisar el comportamiento durante el desarrollo.
    console.info('Analítica local BlogDeCafé:', {
        pagina: paginaActual,
        visitas: visitasGuardadas[paginaActual]
    });
});
