import { companyContact } from './config.js';

document.body.classList.add('has-js');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButtons = document.querySelectorAll('.motion-toggle');
let motionPaused = false;
try { motionPaused = sessionStorage.getItem('expo-motion') === 'off'; } catch {}
const syncMotion = () => {
  document.body.dataset.motion = motionPaused || reducedMotion.matches ? 'off' : 'on';
  motionButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(motionPaused));
    button.textContent = motionPaused ? 'Resume animations' : 'Pause animations';
  });
  document.querySelectorAll('.digital-frame').forEach(frame => {
    try { frame.contentDocument.body.dataset.motion = document.body.dataset.motion; } catch {}
  });
};
syncMotion();
document.querySelectorAll('.digital-frame').forEach(frame => frame.addEventListener('load', syncMotion));
reducedMotion.addEventListener('change', syncMotion);
motionButtons.forEach(button => button.addEventListener('click', () => {
  motionPaused = !motionPaused;
  try { sessionStorage.setItem('expo-motion', motionPaused ? 'off' : 'on'); } catch {}
  syncMotion();
}));

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#primary-nav');
function closeMenu(returnFocus = false) {
  if (!menuButton || !navigation) return;
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  if (returnFocus) menuButton.focus();
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation?.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (menuButton && navigation && !menuButton.contains(event.target) && !navigation.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', () => closeMenu());

const revealElements = document.querySelectorAll('.reveal, .image-reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(element => observer.observe(element));
}
let scrollScheduled = false;
const progress = document.querySelector('.scroll-progress');
function updateProgress() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = 'scaleX(' + (height > 0 ? window.scrollY / height : 0) + ')';
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    window.requestAnimationFrame(updateProgress);
    scrollScheduled = true;
  }
}, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

const galleryItems = [...document.querySelectorAll('.gallery-item')];
const filters = [...document.querySelectorAll('[data-filter]')];
const galleryStatus = document.querySelector('#gallery-status');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  let count = 0;
  galleryItems.forEach(item => {
    item.hidden = category !== 'all' && item.dataset.category !== category;
    if (!item.hidden) count++;
  });
  if (galleryStatus) galleryStatus.textContent = count + ' brand mockups shown.';
}));

const lightbox = document.querySelector('.lightbox');
let currentGallery = [];
let currentIndex = 0;
let openingLink;
function displayMockup() {
  const item = currentGallery[currentIndex];
  if (!item || !lightbox) return;
  const image = document.querySelector('#lightbox-image');
  image.src = item.getAttribute('href');
  image.alt = item.querySelector('img').alt;
  document.querySelector('#lightbox-title').textContent = item.dataset.title;
  document.querySelector('#lightbox-description').textContent = item.dataset.description;
  document.querySelector('#lightbox-counter').textContent = (currentIndex + 1) + ' / ' + currentGallery.length;
}
function shiftMockup(direction) {
  currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
  displayMockup();
}
document.querySelectorAll('[data-gallery]').forEach(anchor => anchor.addEventListener('click', event => {
  if (!lightbox || typeof lightbox.showModal !== 'function') return;
  event.preventDefault();
  currentGallery = [...document.querySelectorAll('[data-gallery]')].filter(item => !item.closest('.gallery-item').hidden);
  currentIndex = currentGallery.indexOf(anchor);
  openingLink = anchor;
  displayMockup();
  lightbox.showModal();
  document.body.classList.add('modal-open');
  lightbox.querySelector('.lightbox-close').focus();
}));
lightbox?.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox?.querySelector('.lightbox-prev').addEventListener('click', () => shiftMockup(-1));
lightbox?.querySelector('.lightbox-next').addEventListener('click', () => shiftMockup(1));
lightbox?.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); shiftMockup(1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); shiftMockup(-1); }
});
lightbox?.addEventListener('click', event => {
  if (event.target !== lightbox) return;
  const box = lightbox.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) lightbox.close();
});
lightbox?.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  openingLink?.focus();
});

const form = document.querySelector('#enquiry');
let enquiryBrief = '';
if (form) {
  form.querySelector('[type=submit]').disabled = false;
  const selectedService = new URLSearchParams(window.location.search).get('service');
  const service = form.elements.namedItem('service');
  if (selectedService && [...service.options].some(option => option.value === selectedService)) service.value = selectedService;
  const feedback = document.querySelector('#brief-feedback');
  const result = document.querySelector('#enquiry-result');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const value = key => String(fields.get(key) || '').trim();
    // Native validation accepts spaces for text inputs; reject those clearly.
    for (const key of ['name', 'origin', 'destination', 'message']) {
      const input = form.elements.namedItem(key);
      input.setCustomValidity(value(key) ? '' : 'Please enter ' + ({name:'your name',origin:'a collection location',destination:'a delivery location',message:'a description of the goods'}[key]) + '.');
      if (!input.checkValidity()) { input.reportValidity(); return; }
    }
    enquiryBrief = [
      'EXPO FREIGHT — SHIPMENT ENQUIRY',
      'Prepared from the website concept. Not sent; not a booking.',
      '',
      'Name: ' + value('name'),
      'Email: ' + value('email'),
      'Company: ' + (value('company') || 'Not provided'),
      'Phone: ' + (value('phone') || 'Not provided'),
      '',
      'Service: ' + value('service'),
      'Collect from: ' + value('origin'),
      'Deliver to: ' + value('destination'),
      'Packages: ' + (value('packages') || 'To confirm'),
      'Weight (kg): ' + (value('weight') || 'To confirm'),
      '',
      'GOODS AND REQUIREMENTS',
      value('message'),
      '',
      'Availability, documentation, pricing and delivery arrangements require confirmation.'
    ].join('\n');
    document.querySelector('#brief-preview').textContent = enquiryBrief;
    feedback.textContent = '';
    const emailLink = document.querySelector('#email-brief');
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(companyContact.email)) {
      emailLink.hidden = false;
      emailLink.href = 'mailto:' + encodeURIComponent(companyContact.email) + '?subject=' + encodeURIComponent('Freight enquiry: ' + value('service')) + '&body=' + encodeURIComponent(enquiryBrief);
    }
    result.hidden = false;
    result.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: document.body.dataset.motion === 'off' ? 'instant' : 'smooth', block: 'nearest' });
  });
  form.addEventListener('input', event => {
    if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
    if (!result.hidden) {
      result.hidden = true;
      enquiryBrief = '';
      feedback.textContent = '';
    }
  });
  document.querySelector('#download-brief').addEventListener('click', () => {
    if (!enquiryBrief) return;
    const blob = new Blob([enquiryBrief], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Expo-Freight-Enquiry.txt';
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    feedback.textContent = 'Your brief is ready in your downloads. Nothing has been sent.';
  });
  document.querySelector('#copy-brief').addEventListener('click', async () => {
    if (!enquiryBrief) return;
    try {
      await navigator.clipboard.writeText(enquiryBrief);
      feedback.textContent = 'Enquiry details copied. Nothing has been sent.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('#brief-preview'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      feedback.textContent = 'Select Copy from your browser menu, or download the brief.';
    }
  });
}
