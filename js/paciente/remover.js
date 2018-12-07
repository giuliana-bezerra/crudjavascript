pacientesTable.addEventListener('dblclick', function (event) {
    var target = event.target.parentNode;
    target.classList.add('fadeOut');
    setTimeout(function () {
        if (target.classList.contains('paciente'))
            removerPaciente(target);
    }, 500);
});

function removerPaciente(paciente) {
    paciente.remove();
}