// script.js
document.getElementById('dosisForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let dosis = parseFloat(document.getElementById('dosis').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let concentracion = parseFloat(document.getElementById('concentracion').value);

    if (isNaN(dosis) || isNaN(peso) || isNaN(concentracion)) {
        alert("Por favor, introduce valores numéricos válidos.");
        return;
    }

    let resultado = (dosis * peso) / concentracion;

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `La dosis calculada es: ${resultado.toFixed(2)}`;
    resultadoDiv.style.opacity = '0';
    resultadoDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultadoDiv.style.opacity = '1';
        resultadoDiv.style.transform = 'translateY(0)';
    }, 100);
});