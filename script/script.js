document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('.phone');

    // Проверяем, существует ли поле телефона на текущей странице, прежде чем добавлять обработчики
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Удаляем все, кроме цифр
            let formattedValue = '';

            if (value.length > 0) {
                formattedValue = '+7';
                if (value.length > 1) {
                    formattedValue += '(' + value.substring(1, Math.min(4, value.length));
                }
                if (value.length >= 4) {
                    formattedValue += ')-';
                    formattedValue += value.substring(4, Math.min(6, value.length));
                }
                if (value.length >= 6) {
                    formattedValue += '-';
                    formattedValue += value.substring(6, Math.min(8, value.length));
                }
            }
            e.target.value = formattedValue;
        });

        phoneInput.addEventListener('focus', function(e) {
            if (!e.target.value) {
                e.target.value = '+7(';
            }
        });

        phoneInput.addEventListener('blur', function(e) {
            // Если пользователь ввел только "+7(", то очищаем поле
            if (e.target.value === '+7(' || e.target.value === '+7()-' || e.target.value === '+7()-(') {
                e.target.value = '';
            }
        });
    }

    // Обработчик для кнопки "Войти" на главной странице (index.html)
    const btnLoginPopup = document.querySelector('.btnLogin-popup');
    if (btnLoginPopup) {
        btnLoginPopup.addEventListener('click', function() {
            window.location.href = 'login.html'; // Перенаправляем на страницу login.html
        });
    }

    // Обработчик для кнопки "Зарегистрироваться" на странице входа (login.html)
    const registerLink = document.querySelector('.register-link');
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем стандартное действие ссылки (переход по href="#")
            window.location.href = 'register.html'; // Перенаправляем на страницу register.html
        });
    }

    // Обработчик для ссылки "Уже есть аккаунт?" на странице регистрации (register.html)
    const resetLink = document.querySelector('.reset');
    if (resetLink) {
        resetLink.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем стандартное действие ссылки
            window.location.href = 'login.html'; // Перенаправляем обратно на страницу login.html
        });
    }
});