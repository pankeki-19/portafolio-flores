document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario y recarga de la página

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const colorFavorito = document.getElementById('color-favorito').value;

    // Construir el mensaje con la información recibida
    const mensaje = `
        <strong>Nombre:</strong> ${nombre} <br>
        <strong>Correo:</strong> ${correo} <br>
        <strong>Edad:</strong> ${edad} <br>
        <strong>Género:</strong> ${genero} <br>
        <strong>Fecha de Nacimiento:</strong> ${fechaNacimiento} <br>
        <strong>Color Favorito:</strong> <span style="background-color: ${colorFavorito}; padding: 0 10px; border: 1px solid black;"></span> ${colorFavorito}
    `;

    // Mostrar el mensaje en el párrafo de resultado
    document.getElementById('resultado').innerHTML = mensaje;
});

