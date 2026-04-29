/* ============================================
   SAIM INNOTECH FARMS — script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== 1. NAVBAR — Scroll shadow ===== */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  /* ===== 2. NAVBAR — Active link on scroll ===== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const activateLink = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', activateLink);


  /* ===== 3. SCROLL REVEAL ===== */
  const revealElements = document.querySelectorAll(
    '.cert-item, .product-card, .why-item, .stat-item, .about-img, .about-content'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
  });

  revealElements.forEach(el => revealObserver.observe(el));


  /* ===== 4. STATS — Animated counter ===== */
  const statNums = document.querySelectorAll('.stat-num');

  const animateCounter = (el) => {
    const target = parseInt(el.textContent.replace(/\D/g, ''), 10);
    const suffix = el.querySelector('span') ? el.querySelector('span').textContent : '';
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.innerHTML = `${start}<span>${suffix}</span>`;
    }, 16);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => counterObserver.observe(el));


  /* ===== 5. SMOOTH SCROLL for anchor links ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 68,
          behavior: 'smooth',
        });
      }
    });
  });


  /* ===== 6. PRODUCT CARD — Click ripple effect ===== */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(74,140,63,0.25);
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
        pointer-events: none;
        animation: ripple 0.6s ease-out forwards;
      `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* Inject ripple keyframes */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      from { transform: scale(0); opacity: 1; }
      to   { transform: scale(2); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

});