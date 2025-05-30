document.addEventListener('DOMContentLoaded', function() {
    // Код для форматирования номера телефона
    const phoneInput = document.querySelector('.phone');
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
    // Убедись, что кнопка с классом .btnLogin-popup существует на index.html
    const btnLoginPopup = document.querySelector('.btnLogin-popup');
    if (btnLoginPopup) {
        btnLoginPopup.addEventListener('click', function() {
            window.location.href = 'login.html'; // Перенаправляем на страницу login.html
        });
    }

    // Комментарий: для ссылок .register-link и .reset
    // Теперь они перенаправляются через атрибут href в HTML,
    // так что JavaScript для них не требуется и удален.
});