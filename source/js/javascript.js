var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.page-header__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  var navToggle = document.querySelector('.page-header__toggle');

  navToggle.classList.remove('page-header__toggle--nojs');

  navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('page-header__toggle-closed')) {
      navToggle.classList.remove('page-header__toggle-closed');
      navToggle.classList.add('page-header__toggle-opened');
    } else {
      navToggle.classList.add('page-header__toggle-closed');
      navToggle.classList.remove('page-header__toggle-opened');
    }
  });

  var navHeader = document.querySelector('.page-header');
  var navToggle = document.querySelector('.page-header__toggle');

  navHeader.classList.remove('page-header--nojs');

  navToggle.addEventListener('click', function () {
    if (navHeader.classList.contains('page-heder--closed')) {
      navHeader.classList.remove('page-header--closed');
      navHeader.classList.add('page-header--opened');
    } else {
      navHeader.classList.add('page-header--closed');
      navHeader.classList.remove('page-header--opened');
    }
  });


let navToggle = document.querySelector('.page-header__toggle');

navToggle.onclick = function() {
  page.classList.toggle('page-header__toggle-closed');
  page.classList.toggle('page-header__toggle-opened');
};
