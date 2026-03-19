/* ============================================================
   BETHANY KIDS MADAGASCAR — Shared Components
   Include this script BEFORE main.js on every page.
   Usage: set window.BKM_PAGE = 'about' | 'doctor' | 'impact' | 'contact' | 'donate' | 'home'
   ============================================================ */

(function () {
  const page = window.BKM_PAGE || 'home';
  const root = window.BKM_ROOT || './';   // path back to site root

  /* ── NAV ── */
  const navHTML = `
<nav class="site-nav">
  <a href="${root}index.html" class="nav-logo">
    <img src="${root}images/bk-logo-color.png" alt="BethanyKids Logo" onerror="this.style.display='none'">
    <div class="nav-logo-text">
      <span class="org-name">Bethany<em style="color:var(--gold);font-style:normal;">Kids</em></span>
      <span class="org-sub">Madagascar</span>
    </div>
  </a>

  <ul class="nav-links" id="nav-links">
    <li><a href="${root}pages/about.html"   data-i18n="nav_about">About</a></li>
    <li><a href="${root}pages/doctor.html"  data-i18n="nav_doctor">Dr. Heuric</a></li>
    <li><a href="${root}pages/impact.html"  data-i18n="nav_impact">Impact</a></li>
    <li><a href="${root}pages/contact.html" data-i18n="nav_contact">Contact</a></li>
    <li><a href="${root}pages/donate.html"  class="btn-donate" data-i18n="nav_donate">Donate</a></li>
  </ul>

  <div class="lang-switcher">
    <span class="lang-label">Language</span>
    <button data-lang="en" class="active" title="English">🇬🇧</button>
    <button data-lang="fr" title="Français">🇫🇷</button>
    <button data-lang="mg" title="Malagasy">🇲🇬</button>
    <button data-lang="zh" title="中文">🇨🇳</button>
  </div>

  <button class="nav-toggle" aria-label="Open menu" onclick="document.getElementById('nav-links').classList.toggle('open')">
    <span></span><span></span><span></span>
  </button>
</nav>`;

  /* ── FOOTER ── */
  const footerHTML = `
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="nav-logo-text">
        <span class="org-name" style="font-family:'Playfair Display',serif;font-size:1.3rem;color:#fff;">
          Bethany<span style="color:var(--gold);">Kids</span> Madagascar
        </span>
      </div>
      <p>Bringing world-class pediatric surgery to the children of Madagascar — one life at a time.</p>
      <p style="margin-top:0.75rem;font-size:0.8rem;">
        A sister initiative of <a href="https://bethanykids.org" target="_blank" rel="noopener" style="color:var(--teal-lt);">BethanyKids</a>
      </p>
    </div>

    <div class="footer-col">
      <h4>Navigate</h4>
      <ul>
        <li><a href="${root}index.html">Home</a></li>
        <li><a href="${root}pages/about.html">About</a></li>
        <li><a href="${root}pages/doctor.html">Dr. Heuric</a></li>
        <li><a href="${root}pages/impact.html">Our Impact</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Get Involved</h4>
      <ul>
        <li><a href="${root}pages/donate.html">Donate</a></li>
        <li><a href="${root}pages/contact.html">Partner With Us</a></li>
        <li><a href="${root}pages/contact.html">Book Appointment</a></li>
        <li><a href="${root}pages/contact.html">Volunteer</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:rakotomalalajeanheuric@gmail.com">Email Us</a></li>
        <li><a href="tel:+261346125373">+261 34 612 5373</a></li>
        <li><a href="https://wa.me/261346125373" target="_blank" rel="noopener">WhatsApp</a></li>
        <li><a href="${root}pages/contact.html">Contact Form</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© <span id="footer-year"></span> BethanyKids Madagascar. Sister site of 
       <a href="https://bethanykids.org" target="_blank" rel="noopener">BethanyKids</a>. 
       All rights reserved.
    </p>
  </div>
</footer>
<script>document.getElementById('footer-year').textContent = new Date().getFullYear();</script>`;

  /* ── Inject ── */
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.outerHTML = navHTML;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = footerHTML;

})();
