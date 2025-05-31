document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('.phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Удаляем все, кроме цифр


            // Если не начинается с 7, принудительно делаем так, чтобы начиналось с 7
            if (!value.startsWith('7')) {
                value = '7' + value;
            }

            // Ограничиваем общую длину (включая 7) до 11 цифр
            if (value.length > 11) {
                value = value.substring(0, 11);
            }

            // Форматирование: +7(XXX)-XXX-XX-XX
            let formattedValue = '+7(';
            if (value.length > 1) {
                formattedValue += value.substring(1, Math.min(4, value.length));
            }
                if (value.length >= 4) {
                    formattedValue += ')';
            }
            
            if (value.length > 4) {
                formattedValue += '-' + value.substring(4, Math.min(7, value.length));
            }
            if (value.length > 7) {
                formattedValue += '-' + value.substring(7, Math.min(9, value.length));
            }
            if (value.length > 9) {
                formattedValue += '-' + value.substring(9, Math.min(11, value.length));
            }

            e.target.value = formattedValue;
        });

        phoneInput.addEventListener('focus', function(e) {
            // Устанавливаем +7( только если поле пустое при фокусе
            if (e.target.value === '') {
                e.target.value = '+7(';
            }
        });

        phoneInput.addEventListener('blur', function(e) {
            const cleanValue = e.target.value.replace(/\D/g, '');
            // Если после удаления всех нецифровых символов осталось только '7' (от +7)
            // или строка пустая, то очищаем поле.
            if (cleanValue === '7' || cleanValue === '') {
                e.target.value = '';
            }
        });
    }

    const btnLoginPopup = document.querySelector('.btnLogin-popup'); 
    if (btnLoginPopup) {
        btnLoginPopup.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    const nameField = document.getElementById('name');
    const phoneField = document.getElementById('phone');
    const emailField = document.getElementById('email');
    const registerButton = document.getElementById('register-action');

    registerButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        let hasError = false;

        if (nameField.value.trim() === '') {
            nameField.style.borderColor = 'red';
            hasError = true;
        } else {
            nameField.style.borderColor = '';
        }

        const phonePattern = /^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
        if (!phonePattern.test(phoneField.value)) {
            phoneField.style.borderColor = 'red';
            hasError = true;
        } else {
            phoneField.style.borderColor = '';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
            emailField.style.borderColor = 'red';
            hasError = true;
        } else {
            emailField.style.borderColor = '';
        }
        
        if (!hasError) {
            document.querySelector('.form-box.register form').submit(); 
            alert('Ваши данные успешно улетели отсюда!'); 
        }
    });
});