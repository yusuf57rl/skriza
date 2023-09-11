document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('cookies-accepted') !== 'true') {
    document.getElementById('cookie-banner').classList.remove('d-none');
  }
});

function acceptCookies() {
  localStorage.setItem('cookies-accepted', 'true');
  document.getElementById('cookie-banner').classList.add('d-none');
  // Aktivieren Sie hier Ihre Cookies
}

function declineCookies() {
  localStorage.setItem('cookies-accepted', 'false');
  document.getElementById('cookie-banner').classList.add('d-none');
  // Deaktivieren Sie hier Ihre Cookies
}
