

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const carrera = document.getElementById('carreraSelect').value;
    const turno = document.getElementById('turnoSelect').value;
    const formAlert = document.getElementById('formAlert');

 
    if (!name || !email || !phone || !dni || !birthdate || !carrera || !turno) {
        formAlert.className = 'alert alert-danger mb-3';
        formAlert.textContent = 'Por favor, complete todos los campos obligatorios.';
        formAlert.classList.remove('d-none');
        return;
    }


    if (dni.length !== 8 || isNaN(dni)) {
        formAlert.className = 'alert alert-danger mb-3';
        formAlert.textContent = 'El número de DNI debe tener exactamente 8 dígitos.';
        formAlert.classList.remove('d-none');
        return;
    }


    if (!email.includes('@') || !email.includes('.')) {
        formAlert.className = 'alert alert-danger mb-3';
        formAlert.textContent = 'Ingrese un correo electrónico válido.';
        formAlert.classList.remove('d-none');
        return;
    }


    formAlert.className = 'alert alert-success mb-3';
    formAlert.textContent = `¡Registro exitoso, ${name}! Sus datos han sido procesados correctamente mediante el método POST. Nos comunicaremos con usted a la brevedad.`;
    formAlert.classList.remove('d-none');


    setTimeout(() => {
        document.getElementById('registroForm').reset();
        formAlert.classList.add('d-none');
    }, 4000);
});
