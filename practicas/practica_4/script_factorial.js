document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numeroInput = document.getElementById('numero').value;
    const numero = parseInt(numeroInput);
    const resultadoParrafo = document.getElementById('resultado');
    
    // Validar si el número es negativo
    if (isNaN(numero)) {
        resultadoParrafo.textContent = "Por favor, ingrese un número válido.";
        resultadoParrafo.style.color = "red";
        return;
    }
    
    if (numero < 0) {
        resultadoParrafo.textContent = "El factorial no está definido para números negativos.";
        resultadoParrafo.style.color = "red";
        return;
    }

    // Calcular factorial de manera recursiva
    const factorial = (n) => {
        if (n === 0) {
            return 1;  // El factorial de 0 es 1
        } else {
            return n * factorial(n - 1);  // Factorial recursivo
        }
    };

    const resultado = factorial(numero);
    resultadoParrafo.textContent = `El factorial de ${numero} es: ${resultado}`;
    resultadoParrafo.style.color = "green";
});

