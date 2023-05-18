window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
      console.log('Service worker register success', reg);
    } catch (e) {
      console.log('Service worker register fail');
    }
  }

  await loadPosts();

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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
      console.log('Service worker registered!', reg);
    } catch (err) {
      console.log('Service worker registration failed:', err);
    }
  });
}

async function loadPosts() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=11'
  );
  const data = await res.json();

  container.innerHTML = ``;
}

function toCard(post) {
  return `
    <div class="card">
      <div class="card-title">
        ${post.title}
      </div>
      <div class="card-body">
        ${post.body}
      </div>
    </div>
  `;
}
