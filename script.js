/* ============================================
   SAIM INNOTECH FARMS — script.js
   Clean & Optimized Version
   ============================================ */

/* ------------------------------------------------------------------
   TRANSLATIONS
------------------------------------------------------------------ */
const translations = Object.freeze({
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_products: 'Products',
    nav_tech: 'Technology',
    nav_quality: 'Quality',
    nav_oem: 'OEM / Private Label',
    nav_news: 'News & Blog',
    nav_contact: 'Contact Us',
    nav_quote: '✉ Get A Quote',

    // Hero
    hero_welcome: 'Welcome to',
    hero_tagline: 'Advanced Kratom Extraction & Innovation',
    hero_desc:
      'We combine modern technology with sustainable farming to deliver premium quality kratom products for a better world.',
    hero_btn_products: 'Our Products →',
    hero_btn_about: 'About Us →',

    // Cert Bar
    cert_gmp_title: 'GMP Certified',
    cert_gmp_desc: 'Good Manufacturing Practice',
    cert_halal_title: 'Halal Certified',
    cert_halal_desc: 'Halal Standard Assurance',
    cert_organic_title: 'Organic Farming',
    cert_organic_desc: '100% Organic Cultivation',
    cert_export_title: 'Export Quality',
    cert_export_desc: 'Global Standard Products',
    cert_lab_title: 'Lab Tested & Safe',
    cert_lab_desc: 'Quality & Safety Guarantee',

    // About
    about_label: 'About Us',
    about_title: 'Innovation From Farm To Future',
    about_desc:
      'SAIM INNOTECH FARMS is a leading kratom producer and exporter from Thailand. We are committed to innovation, quality, and sustainability in every step of our process — from organic farming and advanced extraction to finished products.',
    stat_farms: 'Hectares of Organic Farms',
    stat_exp: 'Years of Experience',
    stat_products: 'Products Worldwide',
    stat_countries: 'Countries Exported',
    about_btn: 'Learn More About Us →',

    // Products
    products_label: 'Our Products',
    products_title: 'Premium Kratom Products',
    products_subtitle:
      'High quality kratom products for every lifestyle and business need',

    prod1_name: 'Kratom Powder',
    prod1_desc: 'Finely ground premium kratom leaves',

    prod2_name: 'Kratom Capsules',
    prod2_desc: 'Convenient and precise dosage',

    prod3_name: 'Kratom Shot',
    prod3_desc: 'Ready-to-drink kratom extract',

    prod4_name: 'Kratom Gummies',
    prod4_desc: 'Delicious and easy kratom experience',

    prod5_name: 'Kratom Liquid Extract',
    prod5_desc: 'High potency liquid kratom extract',

    prod_btn: 'View More →',

    // Why Choose Us
    why_label: 'Why Choose Us',

    why1_title: 'Premium Quality',
    why1_desc:
      'We use high quality materials and strict quality control',

    why2_title: 'Advanced Technology',
    why2_desc:
      'Modern extraction and production technology',

    why3_title: 'Sustainable Practices',
    why3_desc:
      'Environmental care and sustainable farming',

    why4_title: 'Custom Solutions',
    why4_desc:
      'OEM & Private Label available',

    why5_title: 'Global Support',
    why5_desc:
      'Professional support for your business',

    // Footer
    footer_brand_desc:
      'Advanced Kratom Extraction & Innovation for a Better World.',

    footer_quicklinks: 'Quick Links',
    footer_ourproducts: 'Our Products',

    footer_oem: 'OEM / Private Label',
    footer_oem1: 'Custom Formulation',
    footer_oem2: 'Product Development',
    footer_oem3: 'Packaging Design',
    footer_oem4: 'Low MOQ',

    footer_contact: 'Contact Us',
  },

  th: {
    // Navbar
    nav_home: 'หน้าหลัก',
    nav_about: 'เกี่ยวกับเรา',
    nav_products: 'ผลิตภัณฑ์',
    nav_tech: 'เทคโนโลยี',
    nav_quality: 'คุณภาพ',
    nav_oem: 'OEM / เลเบลส่วนตัว',
    nav_news: 'ข่าวสาร & บล็อก',
    nav_contact: 'ติดต่อเรา',
    nav_quote: '✉ ขอใบเสนอราคา',

    // Hero
    hero_welcome: 'ยินดีต้อนรับสู่',
    hero_tagline: 'การสกัดและนวัตกรรมกระท่อมขั้นสูง',
    hero_desc:
      'เราผสานเทคโนโลยีสมัยใหม่เข้ากับการเกษตรแบบยั่งยืน เพื่อส่งมอบผลิตภัณฑ์กระท่อมคุณภาพพรีเมียมสู่โลกที่ดีกว่า',

    hero_btn_products: 'ผลิตภัณฑ์ของเรา →',
    hero_btn_about: 'เกี่ยวกับเรา →',

    // Cert Bar
    cert_gmp_title: 'ได้รับมาตรฐาน GMP',
    cert_gmp_desc: 'หลักปฏิบัติการผลิตที่ดี',

    cert_halal_title: 'ได้รับการรับรองฮาลาล',
    cert_halal_desc: 'มาตรฐานฮาลาล',

    cert_organic_title: 'เกษตรอินทรีย์',
    cert_organic_desc: '100% เพาะปลูกแบบอินทรีย์',

    cert_export_title: 'คุณภาพส่งออก',
    cert_export_desc: 'มาตรฐานผลิตภัณฑ์ระดับโลก',

    cert_lab_title: 'ผ่านการทดสอบในแล็บ',
    cert_lab_desc: 'รับประกันคุณภาพและความปลอดภัย',

    // About
    about_label: 'เกี่ยวกับเรา',
    about_title: 'นวัตกรรมจากฟาร์มสู่อนาคต',

    about_desc:
      'SAIM INNOTECH FARMS คือผู้ผลิตและส่งออกกระท่อมชั้นนำจากประเทศไทย เรามุ่งมั่นในด้านนวัตกรรม คุณภาพ และความยั่งยืนในทุกขั้นตอน ตั้งแต่การเกษตรอินทรีย์ การสกัดขั้นสูง จนถึงผลิตภัณฑ์สำเร็จรูป',

    stat_farms: 'เฮกตาร์ของฟาร์มอินทรีย์',
    stat_exp: 'ปีแห่งประสบการณ์',
    stat_products: 'ผลิตภัณฑ์ทั่วโลก',
    stat_countries: 'ประเทศที่ส่งออก',

    about_btn: 'เรียนรู้เพิ่มเติมเกี่ยวกับเรา →',

    // Products
    products_label: 'ผลิตภัณฑ์ของเรา',
    products_title: 'ผลิตภัณฑ์กระท่อมพรีเมียม',

    products_subtitle:
      'ผลิตภัณฑ์กระท่อมคุณภาพสูงสำหรับทุกไลฟ์สไตล์และธุรกิจ',

    prod1_name: 'ผงกระท่อม',
    prod1_desc: 'ใบกระท่อมพรีเมียมบดละเอียด',

    prod2_name: 'แคปซูลกระท่อม',
    prod2_desc: 'สะดวกและได้ปริมาณที่แม่นยำ',

    prod3_name: 'กระท่อมช็อต',
    prod3_desc: 'สารสกัดกระท่อมพร้อมดื่ม',

    prod4_name: 'กระท่อมกัมมี่',
    prod4_desc: 'อร่อยและสะดวกในการรับประทาน',

    prod5_name: 'สารสกัดกระท่อมเหลว',
    prod5_desc: 'สารสกัดกระท่อมเหลวความเข้มข้นสูง',

    prod_btn: 'ดูเพิ่มเติม →',

    // Why Choose Us
    why_label: 'ทำไมต้องเลือกเรา',

    why1_title: 'คุณภาพพรีเมียม',
    why1_desc:
      'เราใช้วัตถุดิบคุณภาพสูงและควบคุมคุณภาพอย่างเข้มงวด',

    why2_title: 'เทคโนโลยีขั้นสูง',
    why2_desc:
      'เทคโนโลยีการสกัดและการผลิตที่ทันสมัย',

    why3_title: 'การเกษตรยั่งยืน',
    why3_desc:
      'ใส่ใจสิ่งแวดล้อมและการเกษตรแบบยั่งยืน',

    why4_title: 'โซลูชันเฉพาะทาง',
    why4_desc:
      'บริการ OEM & เลเบลส่วนตัว',

    why5_title: 'รองรับทั่วโลก',
    why5_desc:
      'บริการสนับสนุนระดับมืออาชีพสำหรับธุรกิจของคุณ',

    // Footer
    footer_brand_desc:
      'การสกัดและนวัตกรรมกระท่อมขั้นสูงเพื่อโลกที่ดีกว่า',

    footer_quicklinks: 'ลิงก์ด่วน',
    footer_ourproducts: 'ผลิตภัณฑ์ของเรา',

    footer_oem: 'OEM / เลเบลส่วนตัว',
    footer_oem1: 'สูตรเฉพาะทาง',
    footer_oem2: 'พัฒนาผลิตภัณฑ์',
    footer_oem3: 'ออกแบบบรรจุภัณฑ์',
    footer_oem4: 'MOQ ต่ำ',

    footer_contact: 'ติดต่อเรา',
  },
});

/* ------------------------------------------------------------------
   DOM CACHE
------------------------------------------------------------------ */
const DOM = {
  navbar: document.getElementById('navbar'),
  sections: document.querySelectorAll('section[id]'),
  navLinks: document.querySelectorAll('.nav-links a'),

  langToggle: document.getElementById('langToggle'),
  langDropdown: document.getElementById('langDropdown'),

  hamburgerBtn: document.getElementById('hamburgerBtn'),
  navMenu: document.querySelector('.nav-links'),

  currentFlag: document.getElementById('currentFlag'),
  currentLangCode: document.getElementById('currentLangCode'),
};

/* ------------------------------------------------------------------
   INITIALIZE APP
------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', init);

function init() {
  initNavbarScroll();
  initScrollSpy();
  initRevealAnimations();
  initCounters();
  initSmoothScroll();
  initRippleEffect();
  initLanguageSwitcher();
  initMobileMenu();

  switchLanguage(localStorage.getItem('saimLang') || 'en');
}

/* ------------------------------------------------------------------
   LANGUAGE SWITCHER
------------------------------------------------------------------ */
function switchLanguage(lang) {
  const t = translations[lang];

  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;

    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  const flagMap = {
    en: '🇬🇧',
    th: '🇹🇭',
  };

  const codeMap = {
    en: 'EN',
    th: 'TH',
  };

  if (DOM.currentFlag) {
    DOM.currentFlag.textContent = flagMap[lang];
  }

  if (DOM.currentLangCode) {
    DOM.currentLangCode.textContent = codeMap[lang];
  }

  document.querySelectorAll('.lang-option').forEach(option => {
    option.classList.toggle(
      'active',
      option.dataset.lang === lang
    );
  });

  document.documentElement.lang = lang;

  localStorage.setItem('saimLang', lang);
}

function initLanguageSwitcher() {
  if (!DOM.langToggle || !DOM.langDropdown) return;

  DOM.langToggle.addEventListener('click', e => {
    e.stopPropagation();
    DOM.langDropdown.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#langSwitcher')) {
      DOM.langDropdown.classList.remove('open');
    }
  });

  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', e => {
      e.preventDefault();

      switchLanguage(option.dataset.lang);

      DOM.langDropdown.classList.remove('open');
    });
  });
}

/* ------------------------------------------------------------------
   NAVBAR SCROLL EFFECT
------------------------------------------------------------------ */
function initNavbarScroll() {
  if (!DOM.navbar) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;

    requestAnimationFrame(() => {
      DOM.navbar.classList.toggle(
        'scrolled',
        window.scrollY > 20
      );

      ticking = false;
    });

    ticking = true;
  });
}

/* ------------------------------------------------------------------
   ACTIVE NAV LINK
------------------------------------------------------------------ */
function initScrollSpy() {
  if (!DOM.sections.length || !DOM.navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentSection = '';

    DOM.sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        currentSection = section.id;
      }
    });

    DOM.navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentSection}`
      );
    });
  });
}

/* ------------------------------------------------------------------
   INTERSECTION OBSERVER HELPER
------------------------------------------------------------------ */
function createObserver(elements, callback, threshold = 0.1) {
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => callback(el));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      callback(entry.target);

      obs.unobserve(entry.target);
    });
  }, { threshold });

  elements.forEach(el => observer.observe(el));
}

/* ------------------------------------------------------------------
   REVEAL ANIMATION
------------------------------------------------------------------ */
function initRevealAnimations() {
  const revealTargets = document.querySelectorAll(`
    .cert-item,
    .product-card,
    .why-item,
    .stat-item,
    .about-img,
    .about-content
  `);

  revealTargets.forEach(el => {
    el.classList.add('reveal');
  });

  createObserver(
    revealTargets,
    el => el.classList.add('visible'),
    0.12
  );
}

/* ------------------------------------------------------------------
   COUNTER ANIMATION
------------------------------------------------------------------ */
function animateCounter(el) {
  const target = Number(el.dataset.target);

  if (!target) return;

  const suffix =
    el.querySelector('span')?.textContent || '';

  const duration = 1500;
  const stepTime = 16;

  const increment = Math.ceil(
    target / (duration / stepTime)
  );

  let count = 0;

  const timer = setInterval(() => {
    count += increment;

    if (count >= target) {
      count = target;
      clearInterval(timer);
    }

    el.innerHTML = `${count}<span>${suffix}</span>`;
  }, stepTime);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-num');

  createObserver(counters, animateCounter, 0.5);
}

/* ------------------------------------------------------------------
   SMOOTH SCROLL
------------------------------------------------------------------ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');

      if (!href || href === '#') return;

      const target = document.querySelector(href);

      if (!target) return;

      e.preventDefault();

      window.scrollTo({
        top: target.offsetTop - 68,
        behavior: 'smooth',
      });
    });
  });
}

/* ------------------------------------------------------------------
   RIPPLE EFFECT
------------------------------------------------------------------ */
function initRippleEffect() {
  document.addEventListener('click', e => {
    const card = e.target.closest('.product-card');

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement('span');

    Object.assign(ripple.style, {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      left: `${e.clientX - rect.left - size / 2}px`,
      top: `${e.clientY - rect.top - size / 2}px`,
      borderRadius: '50%',
      background: 'rgba(74,140,63,0.25)',
      pointerEvents: 'none',
      animation: 'ripple 0.6s ease-out forwards',
    });

    card.style.position = 'relative';
    card.style.overflow = 'hidden';

    card.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
}

/* ------------------------------------------------------------------
   MOBILE MENU
------------------------------------------------------------------ */
function initMobileMenu() {
  if (!DOM.hamburgerBtn || !DOM.navMenu) return;

  DOM.hamburgerBtn.addEventListener('click', () => {
    DOM.navMenu.classList.toggle('open');

    DOM.hamburgerBtn.classList.toggle('active');
  });

  DOM.navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      DOM.navMenu.classList.remove('open');

      DOM.hamburgerBtn.classList.remove('active');
    });
  });
}