document.getElementById('calificacionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const calificacionInput = document.getElementById('calificacion').value;
    const calificacion = parseFloat(calificacionInput);
    const resultadoParrafo = document.getElementById('resultado');
    
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        resultadoParrafo.textContent = "Error: Ingrese una calificación válida entre 0 y 10.";
        resultadoParrafo.style.color = "red";
        return;
    }

    let equivalencia;

    if (calificacion < 6) {
        equivalencia = "NA";
    } else if (calificacion < 7.5) {
        equivalencia = "S";
    } else if (calificacion < 9) {
        equivalencia = "B";
    } else if (calificacion < 10) {
        equivalencia = "MB";
    } else if (calificacion === 10) {
        equivalencia = "LAP";
    }

    resultadoParrafo.textContent = `La equivalencia de la calificación es: ${equivalencia}`;
    resultadoParrafo.style.color = "green";
});

