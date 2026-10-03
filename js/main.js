(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const copyButton = document.getElementById('copy-ip');
  const ip = document.getElementById('server-ip');
  if (copyButton && ip) {
    copyButton.addEventListener('click', async () => {
      const value = ip.textContent.trim();
      try {
        await navigator.clipboard.writeText(value);
        copyButton.textContent = 'COPIED!';
        setTimeout(() => { copyButton.textContent = 'COPY IP'; }, 1200);
      } catch {
        copyButton.textContent = 'COPY FAILED';
        setTimeout(() => { copyButton.textContent = 'COPY IP'; }, 1200);
      }
    });
  }

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
