// Add interactive effects for a modern feel
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in hero or main
  const hero = document.querySelector('.hero') || document.querySelector('main');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(24px)';
    setTimeout(() => {
      hero.style.transition = 'opacity 600ms ease, transform 600ms ease';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 80);
  }

  // Header shrink on scroll
  const nav = document.querySelector('nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const st = window.scrollY;
      if (st > 60) nav.style.padding = '10px 28px';
      else nav.style.padding = '18px 28px';
      lastScroll = st;
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });

  // Ripple effect for nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = (e.clientX - rect.left) + 'px';
      ripple.style.top = (e.clientY - rect.top) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Animated counters (if any)
  document.querySelectorAll('.counter').forEach(el => {
    const target = +el.dataset.target || +el.textContent || 0;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const iv = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(iv);
      } else el.textContent = current;
    }, 16);
  });
});
