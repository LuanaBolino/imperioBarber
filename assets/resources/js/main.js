document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

  window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
  });