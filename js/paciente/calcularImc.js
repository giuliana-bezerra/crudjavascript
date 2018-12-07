function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

var pacientes = Array.from(document.querySelectorAll('.paciente'));
pacientes.forEach(function (paciente) {
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    var tdImc = paciente.querySelector('.info-imc');

    if (!validarPeso(peso))
        paciente.classList.add('paciente-invalido');
    else if (!validarAltura(altura))
        paciente.classList.add('paciente-invalido');
    else {
        tdImc.textContent = calculaImc(peso, altura);
    }
});

function validarPeso(peso) {
    if (peso <= 0 || peso >= 1000)
        return false;
    else
        return true;
}

function validarAltura(altura) {
    if (altura <= 0 || altura >= 3)
        return false;
    else
        return true;
}