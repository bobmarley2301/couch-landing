
const token = '7659930943:AAGa6mWEcghRjc2XGidjFaB4qI88sjSt0xI';
const chatId = '5228123933';

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Збираємо дані з полів форми
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const telegram = document.querySelector('input[name="telegram"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

        // Формуємо текст повідомлення для Telegram
    const telegramMessage = `
        🔔 Нова заявка на сайті! 🔔\n
        👤 Ім'я: ${name}\n
        📧 Email: ${email}\n
        📞 Телефон: ${phone}\n
        🗨 Telegram: ${telegram}\n
        ❓ Повідомлення: ${message}
    `;

    // Відправляємо повідомлення через Telegram Bot API
    axios.get(`https://api.telegram.org/bot${token}/sendMessage`, {
        params: {
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: 'HTML'
        }
    })
    .then(response => {
        alert('Повідомлення успішно надіслано!');
        console.log('Повідомлення успішно надіслано:', response);
        document.getElementById('contactForm').reset();  // Очищаємо форму
    })
    .catch(error => {
        console.error('Помилка при надсиланні повідомлення:', error);
        alert('Сталася помилка. Спробуйте ще раз.');
    });
});

