/* ============================================================
   BETHANY KIDS MADAGASCAR — Main JS
   ============================================================ */

/* ── Mobile Nav ── */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

/* ── Active Nav Link ── */
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === path) link.classList.add('active');
  });
})();

/* ── Language Switcher ── */
const translations = {
  en: {
    nav_about:    'About',
    nav_doctor:   'Dr. Heuric',
    nav_impact:   'Impact',
    nav_contact:  'Contact',
    nav_donate:   'Donate',
    hero_eyebrow: 'Bethany Kids Madagascar',
    hero_h1_a:    'Healing Children.',
    hero_h1_b:    'Transforming Lives.',
    hero_p:       'Bringing world-class pediatric surgery to the children of Madagascar who need it most.',
    btn_sponsor:  'Sponsor a Surgery',
    btn_learn:    'Learn More',
    stat1_num:    '[PLACEHOLDER]',
    stat1_lbl:    'Surgeries Performed',
    stat2_num:    '[PLACEHOLDER]',
    stat2_lbl:    'Hospitals Served',
    stat3_num:    '20+',
    stat3_lbl:    'Years of Service',
    stat4_num:    '[PLACEHOLDER]',
    stat4_lbl:    'Children Helped',
  },
  fr: {
    nav_about:    'À Propos',
    nav_doctor:   'Dr. Heuric',
    nav_impact:   'Impact',
    nav_contact:  'Contact',
    nav_donate:   'Faire un Don',
    hero_eyebrow: 'Bethany Kids Madagascar',
    hero_h1_a:    'Guérir les Enfants.',
    hero_h1_b:    'Transformer des Vies.',
    hero_p:       'Apporter une chirurgie pédiatrique de classe mondiale aux enfants de Madagascar qui en ont le plus besoin.',
    btn_sponsor:  'Parrainer une Chirurgie',
    btn_learn:    'En Savoir Plus',
    stat1_num:    '[PLACEHOLDER]',
    stat1_lbl:    'Chirurgies Réalisées',
    stat2_num:    '[PLACEHOLDER]',
    stat2_lbl:    'Hôpitaux Desservis',
    stat3_num:    '20+',
    stat3_lbl:    "Années de Service",
    stat4_num:    '[PLACEHOLDER]',
    stat4_lbl:    'Enfants Aidés',
  },
  mg: {
    nav_about:    'Momba',
    nav_doctor:   'Dr. Heuric',
    nav_impact:   'Fiantraika',
    nav_contact:  'Mifandraisa',
    nav_donate:   'Fanampiana',
    hero_eyebrow: 'Bethany Kids Madagascar',
    hero_h1_a:    'Fanasitranana Ankizy.',
    hero_h1_b:    'Fanovana Fiainana.',
    hero_p:       'Mitondra fitsaboana ankizy mahafehy ho an\'ireo ankizy malagasy mila indrindra.',
    btn_sponsor:  'Suportena Fandidiana',
    btn_learn:    'Fantaro Bebe',
    stat1_num:    '[PLACEHOLDER]',
    stat1_lbl:    'Fandidiana Natao',
    stat2_num:    '[PLACEHOLDER]',
    stat2_lbl:    'Hopitaly Nosasahana',
    stat3_num:    '20+',
    stat3_lbl:    'Taona Fanompoana',
    stat4_num:    '[PLACEHOLDER]',
    stat4_lbl:    'Ankizy Nafana',
  },
  zh: {
    nav_about:    '关于我们',
    nav_doctor:   'Heuric 医生',
    nav_impact:   '影响',
    nav_contact:  '联系我们',
    nav_donate:   '捐款',
    hero_eyebrow: 'Bethany Kids Madagascar',
    hero_h1_a:    '治愈儿童。',
    hero_h1_b:    '改变生命。',
    hero_p:       '为马达加斯加最需要帮助的儿童提供世界级的小儿外科手术。',
    btn_sponsor:  '资助一次手术',
    btn_learn:    '了解更多',
    stat1_num:    '[占位符]',
    stat1_lbl:    '已完成手术',
    stat2_num:    '[占位符]',
    stat2_lbl:    '服务医院',
    stat3_num:    '20+',
    stat3_lbl:    '服务年限',
    stat4_num:    '[占位符]',
    stat4_lbl:    '受助儿童',
  }
};

let currentLang = 'en';

function applyTranslation(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.setAttribute('lang', lang);
}

document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    applyTranslation(btn.getAttribute('data-lang'));
  });
});

/* ── Contact / Appointment Form ── */
function initForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    // Simulate async (replace with real backend / Formspree / EmailJS)
    setTimeout(() => {
      form.innerHTML = `<div class="alert alert-success">
        <strong>Message sent!</strong> Dr. Heuric's team will be in touch shortly.
      </div>`;
    }, 1200);
  });
}

initForm('contact-form');
initForm('appointment-form');

/* ── Animate stats on scroll ── */
function animateValue(el, start, end, duration) {
  if (isNaN(end)) { el.textContent = el.getAttribute('data-val'); return; }
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.floor(progress * (end - start) + start).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const val = parseInt(el.getAttribute('data-val'));
      animateValue(el, 0, val, 1400);
      statsObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.stat-number[data-val]').forEach(el => {
  statsObserver.observe(el);
});

/* ── Smooth fade-in on scroll ── */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
