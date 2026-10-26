const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

if (menuToggle && navigation) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const comparison = document.querySelector('[data-comparison]');
const comparisonRange = document.querySelector('.comparison-range');

if (comparison && comparisonRange) {
  comparisonRange.addEventListener('input', () => {
    comparison.style.setProperty('--split', `${comparisonRange.value}%`);
    comparisonRange.setAttribute('aria-valuetext', `${comparisonRange.value} percent`);
  });
}

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const serviceSelect = document.querySelector('#service');
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});

const form = document.querySelector('#booking-form');
const status = document.querySelector('#form-status');
const fields = {
  name: { input: document.querySelector('#name'), error: document.querySelector('#name-error') },
  phone: { input: document.querySelector('#phone'), error: document.querySelector('#phone-error') },
  service: { input: document.querySelector('#service'), error: document.querySelector('#service-error') },
};

function validateField(key) {
  const field = fields[key];
  const value = field.input.value.trim();
  let message = '';

  if (key === 'name' && value.length < 2) message = 'Please enter your name (at least 2 characters).';
  if (key === 'phone') {
    const digits = value.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) message = 'Enter a phone number with 7 to 15 digits.';
  }
  if (key === 'service' && !value) message = 'Choose a service to continue.';

  field.input.setAttribute('aria-invalid', String(Boolean(message)));
  field.error.textContent = message;
  return !message;
}

Object.entries(fields).forEach(([key, field]) => {
  field.input.addEventListener('blur', () => validateField(key));
  field.input.addEventListener('input', () => {
    if (field.input.hasAttribute('aria-invalid')) validateField(key);
    if (status && !status.hidden) status.hidden = true;
  });
  field.input.addEventListener('change', () => {
    if (field.input.hasAttribute('aria-invalid')) validateField(key);
  });
});

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.hidden = true;
    const valid = Object.keys(fields).map(validateField).every(Boolean);

    if (!valid) {
      status.textContent = 'Please check the highlighted fields and try again. This is a demo form; nothing will be sent.';
      status.hidden = false;
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      firstInvalid?.focus();
      status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    status.textContent = 'Your details passed the demo validation. No booking was sent or saved. Connect a booking backend to receive real enquiries.';
    status.hidden = false;
    status.focus();
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
