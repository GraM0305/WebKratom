/* ============================================
   SAIM INNOTECH FARMS — script.js
   ============================================ */

/* ============================================================
   [เพิ่มใหม่] ส่วนที่ 1: TRANSLATIONS — คลังคำแปลทุกภาษา
   วิธีเพิ่มภาษาใหม่: ก็แค่เพิ่ม key ใหม่ข้างล่างนี้ เช่น zh: { ... }
   วิธีแก้คำแปล: หาชื่อ key ที่ตรงกับ data-i18n ใน HTML แล้วแก้ตรงนี้เลย
   ============================================================ */
const translations = {

  en: {
    /* --- Navbar --- */
    nav_home:       'Home',
    nav_about:      'About Us',
    nav_products:   'Products',
    nav_tech:       'Technology',
    nav_quality:    'Quality',
    nav_oem:        'OEM / Private Label',
    nav_news:       'News & Blog',
    nav_contact:    'Contact Us',
    nav_quote:      '✉ Get A Quote',

    /* --- Hero --- */
    hero_welcome:      'Welcome to',
    hero_tagline:      'Advanced Kratom Extraction & Innovation',
    hero_desc:         'We combine modern technology with sustainable farming to deliver premium quality kratom products for a better world.',
    hero_btn_products: 'Our Products →',
    hero_btn_about:    'About Us →',

    /* --- Cert Bar --- */
    cert_gmp_title:     'GMP Certified',
    cert_gmp_desc:      'Good Manufacturing Practice',
    cert_halal_title:   'Halal Certified',
    cert_halal_desc:    'Halal Standard Assurance',
    cert_organic_title: 'Organic Farming',
    cert_organic_desc:  '100% Organic Cultivation',
    cert_export_title:  'Export Quality',
    cert_export_desc:   'Global Standard Products',
    cert_lab_title:     'Lab Tested & Safe',
    cert_lab_desc:      'Quality & Safety Guarantee',

    /* --- About --- */
    about_label:   'About Us',
    about_title:   'Innovation From Farm To Future',
    about_desc:    'SAIM INNOTECH FARMS is a leading kratom producer and exporter from Thailand. We are committed to innovation, quality, and sustainability in every step of our process — from organic farming and advanced extraction to finished products.',
    stat_farms:    'Hectares of Organic Farms',
    stat_exp:      'Years of Experience',
    stat_products: 'Products Worldwide',
    stat_countries:'Countries Exported',
    about_btn:     'Learn More About Us →',

    /* --- Products --- */
    products_label:    'Our Products',
    products_title:    'Premium Kratom Products',
    products_subtitle: 'High quality kratom products for every lifestyle and business need',
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
    prod_btn:   'View More →',

    /* --- Why Choose Us --- */
    why_label:   'Why Choose Us',
    why1_title:  'Premium Quality',
    why1_desc:   'We use high quality materials and strict quality control',
    why2_title:  'Advanced Technology',
    why2_desc:   'Modern extraction and production technology',
    why3_title:  'Sustainable Practices',
    why3_desc:   'Environmental care and sustainable farming',
    why4_title:  'Custom Solutions',
    why4_desc:   'OEM & Private Label available',
    why5_title:  'Global Support',
    why5_desc:   'Professional support for your business',

    /* --- Footer --- */
    footer_brand_desc:  'Advanced Kratom Extraction & Innovation for a Better World.',
    footer_quicklinks:  'Quick Links',
    footer_ourproducts: 'Our Products',
    footer_oem:         'OEM / Private Label',
    footer_oem1:        'Custom Formulation',
    footer_oem2:        'Product Development',
    footer_oem3:        'Packaging Design',
    footer_oem4:        'Low MOQ',
    footer_contact:     'Contact Us',
  },

  th: {
    /* --- Navbar --- */
    nav_home:       'หน้าหลัก',
    nav_about:      'เกี่ยวกับเรา',
    nav_products:   'ผลิตภัณฑ์',
    nav_tech:       'เทคโนโลยี',
    nav_quality:    'คุณภาพ',
    nav_oem:        'OEM / เลเบลส่วนตัว',
    nav_news:       'ข่าวสาร & บล็อก',
    nav_contact:    'ติดต่อเรา',
    nav_quote:      '✉ ขอใบเสนอราคา',

    /* --- Hero --- */
    hero_welcome:      'ยินดีต้อนรับสู่',
    hero_tagline:      'การสกัดและนวัตกรรมกระท่อมขั้นสูง',
    hero_desc:         'เราผสานเทคโนโลยีสมัยใหม่เข้ากับการเกษตรแบบยั่งยืน เพื่อส่งมอบผลิตภัณฑ์กระท่อมคุณภาพพรีเมียมสู่โลกที่ดีกว่า',
    hero_btn_products: 'ผลิตภัณฑ์ของเรา →',
    hero_btn_about:    'เกี่ยวกับเรา →',

    /* --- Cert Bar --- */
    cert_gmp_title:     'ได้รับมาตรฐาน GMP',
    cert_gmp_desc:      'หลักปฏิบัติการผลิตที่ดี',
    cert_halal_title:   'ได้รับการรับรองฮาลาล',
    cert_halal_desc:    'มาตรฐานฮาลาล',
    cert_organic_title: 'เกษตรอินทรีย์',
    cert_organic_desc:  '100% เพาะปลูกแบบอินทรีย์',
    cert_export_title:  'คุณภาพส่งออก',
    cert_export_desc:   'มาตรฐานผลิตภัณฑ์ระดับโลก',
    cert_lab_title:     'ผ่านการทดสอบในแล็บ',
    cert_lab_desc:      'รับประกันคุณภาพและความปลอดภัย',

    /* --- About --- */
    about_label:   'เกี่ยวกับเรา',
    about_title:   'นวัตกรรมจากฟาร์มสู่อนาคต',
    about_desc:    'SAIM INNOTECH FARMS คือผู้ผลิตและส่งออกกระท่อมชั้นนำจากประเทศไทย เรามุ่งมั่นในด้านนวัตกรรม คุณภาพ และความยั่งยืนในทุกขั้นตอน ตั้งแต่การเกษตรอินทรีย์ การสกัดขั้นสูง จนถึงผลิตภัณฑ์สำเร็จรูป',
    stat_farms:    'เฮกตาร์ของฟาร์มอินทรีย์',
    stat_exp:      'ปีแห่งประสบการณ์',
    stat_products: 'ผลิตภัณฑ์ทั่วโลก',
    stat_countries:'ประเทศที่ส่งออก',
    about_btn:     'เรียนรู้เพิ่มเติมเกี่ยวกับเรา →',

    /* --- Products --- */
    products_label:    'ผลิตภัณฑ์ของเรา',
    products_title:    'ผลิตภัณฑ์กระท่อมพรีเมียม',
    products_subtitle: 'ผลิตภัณฑ์กระท่อมคุณภาพสูงสำหรับทุกไลฟ์สไตล์และธุรกิจ',
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
    prod_btn:   'ดูเพิ่มเติม →',

    /* --- Why Choose Us --- */
    why_label:   'ทำไมต้องเลือกเรา',
    why1_title:  'คุณภาพพรีเมียม',
    why1_desc:   'เราใช้วัตถุดิบคุณภาพสูงและควบคุมคุณภาพอย่างเข้มงวด',
    why2_title:  'เทคโนโลยีขั้นสูง',
    why2_desc:   'เทคโนโลยีการสกัดและการผลิตที่ทันสมัย',
    why3_title:  'การเกษตรยั่งยืน',
    why3_desc:   'ใส่ใจสิ่งแวดล้อมและการเกษตรแบบยั่งยืน',
    why4_title:  'โซลูชันเฉพาะทาง',
    why4_desc:   'บริการ OEM & เลเบลส่วนตัว',
    why5_title:  'รองรับทั่วโลก',
    why5_desc:   'บริการสนับสนุนระดับมืออาชีพสำหรับธุรกิจของคุณ',

    /* --- Footer --- */
    footer_brand_desc:  'การสกัดและนวัตกรรมกระท่อมขั้นสูงเพื่อโลกที่ดีกว่า',
    footer_quicklinks:  'ลิงก์ด่วน',
    footer_ourproducts: 'ผลิตภัณฑ์ของเรา',
    footer_oem:         'OEM / เลเบลส่วนตัว',
    footer_oem1:        'สูตรเฉพาะทาง',
    footer_oem2:        'พัฒนาผลิตภัณฑ์',
    footer_oem3:        'ออกแบบบรรจุภัณฑ์',
    footer_oem4:        'MOQ ต่ำ',
    footer_contact:     'ติดต่อเรา',
  }

};

/* ============================================================
   [เพิ่มใหม่] ส่วนที่ 2: SWITCH LANGUAGE FUNCTION
   ฟังก์ชันหลักที่เปลี่ยนข้อความทั้งหน้า

   วิธีทำงาน:
   1. รับ lang ('en' หรือ 'th')
   2. วนหา element ทุกตัวที่มี attribute data-i18n
   3. เอา key ใน data-i18n ไปหาคำแปลใน translations object ด้านบน
   4. ใส่คำแปลเป็น textContent ของ element นั้น
   5. จำภาษาที่เลือกไว้ใน localStorage (กด refresh แล้วภาษาไม่หาย)
   ============================================================ */
function switchLanguage(lang) {
  const t = translations[lang];
  if (!t) return; // ถ้าไม่มีภาษานั้นในคลัง ก็หยุดทำงาน

  /* วนทุก element ที่มี data-i18n แล้วเปลี่ยนข้อความ */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  /* อัปเดตปุ่มภาษาให้แสดง flag และรหัสของภาษาที่เลือก */
  const flagMap = { en: '🇬🇧', th: '🇹🇭' };
  const codeMap = { en: 'EN',   th: 'TH'   };
  document.getElementById('currentFlag').textContent    = flagMap[lang];
  document.getElementById('currentLangCode').textContent = codeMap[lang];

  /* อัปเดต class "active" บน option ใน dropdown
     เพื่อ highlight ภาษาที่เลือกอยู่ด้วยสีที่ต่างออกไป */
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  /* เปลี่ยน lang attribute บน <html> → ช่วยให้ browser และ screen reader รู้ภาษา */
  document.documentElement.setAttribute('lang', lang);

  /* บันทึกภาษาที่เลือกไว้ใน localStorage กด refresh แล้วภาษาไม่หาย */
  localStorage.setItem('saimLang', lang);
}


/* ============================================================
   Main: DOMContentLoaded
   ============================================================ */
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


  /* ===== 7. [เพิ่มใหม่] LANGUAGE DROPDOWN — เปิด/ปิด =====
     เมื่อกดปุ่ม #langToggle → toggle class "open" บน #langDropdown
     class "open" ถูก style ใน styles.css ให้แสดง dropdown ออกมา */
  const langToggle   = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');

  /* กดปุ่มธง → เปิด/ปิด dropdown */
  langToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // ป้องกัน event ลามไปถึง document แล้วปิดทันที
    langDropdown.classList.toggle('open');
  });

  /* คลิกที่อื่นนอก dropdown → ปิด dropdown อัตโนมัติ */
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#langSwitcher')) {
      langDropdown.classList.remove('open');
    }
  });

  /* ===== 8. [เพิ่มใหม่] LANGUAGE OPTION — เมื่อเลือกภาษา =====
     เมื่อกด option ใน dropdown → เรียก switchLanguage() แล้วปิด dropdown */
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = option.getAttribute('data-lang'); // อ่านค่า data-lang="en" หรือ "th"
      switchLanguage(lang);
      langDropdown.classList.remove('open'); // ปิด dropdown หลังเลือก
    });
  });

  /* ===== 9. [เพิ่มใหม่] โหลดภาษาที่เคยเลือกไว้ =====
     ถ้าเคยเลือกภาษาไว้ใน localStorage → โหลดภาษานั้นเลย
     ถ้ายังไม่เคยเลือก → ใช้ภาษาอังกฤษเป็นค่าเริ่มต้น */
  const savedLang = localStorage.getItem('saimLang') || 'en';
  switchLanguage(savedLang);

});