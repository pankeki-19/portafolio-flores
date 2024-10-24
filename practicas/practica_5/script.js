function agregarFila() {
    // Obtener los valores de los campos
    const textInput = document.getElementById('textInput').value;
    const emailInput = document.getElementById('emailInput').value;
    
    const checkboxGroup = [];
    if (document.getElementById('check1').checked) checkboxGroup.push('Gatos');
    if (document.getElementById('check2').checked) checkboxGroup.push('Perros');
    if (document.getElementById('check3').checked) checkboxGroup.push('Osos');

    const radioGroup = document.querySelector('input[name="radioGroup"]:checked');
    const radioValue = radioGroup ? radioGroup.value : "";

    const dateTime = document.getElementById('dateTime').value;
    const colorInput = document.getElementById('colorInput').value;
    const rangeInput = document.getElementById('rangeInput').value;

    // Validar que todos los campos estén llenos
    if (!textInput || !emailInput || checkboxGroup.length === 0 || !radioValue || !dateTime || !colorInput || !rangeInput) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear una nueva fila en la tabla
    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();

    // Insertar las celdas con los valores del formulario
    nuevaFila.insertCell(0).textContent = textInput;
    nuevaFila.insertCell(1).textContent = emailInput;
    nuevaFila.insertCell(2).textContent = checkboxGroup.join(', ');
    nuevaFila.insertCell(3).textContent = radioValue;
    nuevaFila.insertCell(4).textContent = dateTime;
    nuevaFila.insertCell(5).textContent = colorInput;
    nuevaFila.insertCell(6).textContent = rangeInput;

    // Limpiar el formulario
    document.getElementById('formulario').reset();
}

