document.addEventListener('DOMContentLoaded', function() {
    const recoveryForm = document.getElementById('recoveryForm');
    const successMessage = document.getElementById('successMessage');
    
    if (recoveryForm) {
        recoveryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío del formulario
            const email = document.getElementById('recoveryEmail').value;
            
            // Validación simple
            if (!email.includes('@') || !email.includes('.')) {
                alert('Por favor ingresa un correo electrónico válido');
                return;
            }
            
            // Mostrar mensaje de éxito
            recoveryForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Aquí iría la lógica real para enviar el correo de recuperación
            console.log('Correo de recuperación enviado a:', email);
        });
    }
});