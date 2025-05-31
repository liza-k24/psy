document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('.phone');

    // Проверяем, существует ли поле телефона на текущей странице, прежде чем добавлять обработчики
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Удаляем все, кроме цифр

            // Если пользователь удалил все символы, кроме "+7", то начинаем с чистого листа
            if (value.startsWith('7') && value.length === 1) {
                value = ''; // Если осталась только 7, обнуляем, чтобы пользователь мог начать сначала
            } else if (!value.startsWith('7') && value.length > 0) {
                // Если пользователь начал вводить не с 7, или это не российская 7-ка, обнуляем
                value = '';
            } else if (value.startsWith('7') && value.length > 1) {
                // Если начинается с 7, то убираем ее для дальнейшего форматирования
                value = value.substring(1); 
            } else {
                value = ''; // Если пустая строка или что-то не то
            }

            let formattedValue = '+7';

            if (value.length > 0) {
                // Первый блок из 3 цифр
                formattedValue += '(' + value.substring(0, Math.min(3, value.length));
                if (value.length > 3) {
                    formattedValue += ')';
                }

                // Второй блок из 3 цифр
                if (value.length > 3) {
                    formattedValue += '-' + value.substring(3, Math.min(6, value.length));
                    if (value.length > 6) {
                        formattedValue += '';
                    }
                }

                // Третий блок из 2 цифр
                if (value.length > 6) {
                    formattedValue += '-' + value.substring(6, Math.min(8, value.length));
                    if (value.length > 8) {
                        formattedValue += '';
                    }
                }

                // Четвертый блок из 2 цифр
                if (value.length > 8) {
                    formattedValue += '-' + value.substring(8, Math.min(10, value.length));
                    if (value.length > 10) {
                        formattedValue += ''; // На случай, если каким-то образом введут больше 10 цифр
                    }
                }
            } else {
                formattedValue = ''; // Если нет цифр, поле должно быть пустым
            }

            e.target.value = formattedValue;
        });

        // Обработчик focus - устанавливает "+7(" только если поле пустое
        phoneInput.addEventListener('focus', function(e) {
            if (e.target.value.length === 0) {
                e.target.value = '+7(';
            }
        });

        // Обработчик blur - убирает "+7(" если пользователь ничего не ввел после
        phoneInput.addEventListener('blur', function(e) {
            // Удаляем все, кроме цифр, включая +7 в начале
            const cleanValue = e.target.value.replace(/\D/g, ''); 
            // Если после удаления всех символов, кроме цифр, осталось только "7"
            // (т.е., пользователь ввел только "+7(" и больше ничего)
            if (cleanValue === '7' || cleanValue === '') { 
                e.target.value = ''; // Очищаем поле
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
    // Они перенаправляются через атрибут href в HTML,
    // так что JavaScript для них не требуется и удален.
});