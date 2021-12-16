var navMain = document.querySelector('.country-nav');
  var navToggle = document.querySelector('.country-nav__toggle');

  navMain.classList.remove('country-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('country-nav--closed')) {
      navMain.classList.remove('country-nav--closed');
      navMain.classList.add('country-nav--opened');
    } else {
      navMain.classList.add('country-nav--closed');
      navMain.classList.remove('country-nav--opened');
    }
  });

