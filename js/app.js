window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('/check-wifi/sw.js');
      console.log('Service worker register success', reg);
    } catch (e) {
      console.log('Service worker register fail');
    }
  }
});

window.addEventListener('load', () => {
  const container = document.querySelector('#posts');
  if (navigator.connection) {
    const { effectiveType } = navigator.connection;
    container.textContent = `Тип соединения: ${effectiveType}`;
  }

  if (navigator.connection) {
    const { effectiveType } = navigator.connection;
    if (effectiveType === 'wifi') {
      console.log('Пользователь подключен к Wi-Fi');
    } else if (effectiveType === 'cellular') {
      console.log('Пользователь подключен к мобильному интернету');
    }
  }
});
