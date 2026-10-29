// ========================================================
// Ahbab Ali K. - Portfolio Interactivity & Core Scripts
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    }

    // Close when clicking outside drawer
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  // 3. Highlight Active Navigation Item based on current URL path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 4. Project Filtering (on projects.html)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter || category.includes(filter)) {
            card.style.display = 'block';
            card.classList.add('animate-fadeIn');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. Contact Form Validation and Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const subject = document.getElementById('subject')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      // Basic validation
      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please provide a valid email address.', 'error');
        return;
      }

      // Format mailto link
      const mailtoUrl = `mailto:alikahbab@gmail.com?subject=${encodeURIComponent(subject || 'Engineering Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`)}`;
      
      showToast('Thank you! Opening your email client...', 'success');
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1000);
      
      contactForm.reset();
    });
  }

  // 6. Inject Floating Download CV Button on all pages (except resume.html itself)
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage !== 'resume.html') {
    const fab = document.createElement('a');
    fab.href = 'resume.html';
    fab.title = 'View & Download CV';
    fab.style.cssText = `
      position: fixed;
      bottom: 1.5rem;
      left: 1.5rem;
      z-index: 999;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #f0c554 0%, #d4a02c 100%);
      color: #000000;
      font-family: 'Palatino Linotype', Georgia, serif;
      font-weight: 700;
      font-size: 0.78rem;
      padding: 0.6rem 1.1rem;
      border-radius: 9999px;
      box-shadow: 0 4px 20px rgba(229, 184, 66, 0.45);
      transition: all 0.3s ease;
      text-decoration: none;
      letter-spacing: 0.03em;
    `;
    fab.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      <span>Download CV</span>
    `;
    fab.addEventListener('mouseenter', () => {
      fab.style.transform = 'translateY(-3px)';
      fab.style.boxShadow = '0 8px 30px rgba(229, 184, 66, 0.6)';
    });
    fab.addEventListener('mouseleave', () => {
      fab.style.transform = 'translateY(0)';
      fab.style.boxShadow = '0 4px 20px rgba(229, 184, 66, 0.45)';
    });
    document.body.appendChild(fab);
  }
});

// Toast notification helper
function showToast(message, type = 'info') {
  let existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let iconHtml = '<i data-lucide="check-circle" class="w-5 h-5 text-[#e5b842]"></i>';
  if (type === 'error') {
    iconHtml = '<i data-lucide="alert-circle" class="w-5 h-5 text-rose-400"></i>';
  }

  toast.innerHTML = `
    ${iconHtml}
    <span>${message}</span>
  `;

  document.body.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Global helper for copying contact details
function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg, 'success');
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast(successMsg, 'success');
}
