document.getElementById('registroForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Simula el procesamiento del formulario (Método POST)

                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const carrera = document.getElementById('carreraSelect').value;
                const formAlert = document.getElementById('formAlert');

                // Validación básica de campos vacíos
                if (!name || !email || !phone || !carrera) {
                    formAlert.className = 'alert alert-danger mb-3';
                    formAlert.textContent = 'Por favor, complete todos los campos obligatorios.';
                    formAlert.classList.remove('d-none');
                    return;
                }

                
                if (!email.includes('@') || !email.includes('.')) {
                    formAlert.className = 'alert alert-danger mb-3';
                    formAlert.textContent = 'Ingrese un correo electrónico válido.';
                    formAlert.classList.remove('d-none');
                    return;
                }

                // Simulación de envío exitoso y manipulación visual del DOM
                formAlert.className = 'alert alert-success mb-3';
                formAlert.textContent = `¡Registro exitoso, ${name}! Sus datos han sido procesados correctamente mediante el método POST. Nos comunicaremos con usted a la brevedad.`;
                formAlert.classList.remove('d-none');

                // Resetear formulario a los 4 segundos
                setTimeout(() => {
                    document.getElementById('registroForm').reset();
                    formAlert.classList.add('d-none');
                }, 4000);
            });