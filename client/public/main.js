// Add interactive effects for a modern feel
window.onload = function() {
  // Animate main content fade-in
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = 0;
    main.style.transform = 'translateY(40px)';
    setTimeout(() => {
      main.style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
      main.style.opacity = 1;
      main.style.transform = 'translateY(0)';
    }, 100);
  }

  // Ripple effect for nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = e.offsetX + 'px';
      ripple.style.top = e.offsetY + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
};
