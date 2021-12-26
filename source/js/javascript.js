var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.page-header__toggle');

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });

    var navHeader = document.querySelector('.page-header');
    var navToggle = document.querySelector('.page-header__toggle');

    navHeader.classList.remove('page-header--nojs');

    navToggle.addEventListener('click', function () {
      if (navHeader.classList.contains('page-header--closed')) {
        navHeader.classList.remove('page-header--closed');
        navHeader.classList.add('page-header--opened');
      } else {
        navHeader.classList.add('page-header--closed');
        navHeader.classList.remove('page-header--opened');
      }
    });

    var filter = document.querySelector('.selection-companion__filter-group');
    var filterLink = document.querySelector('.selection-companion__link-wrapper');

    filter.classList.remove('selection-companion__filter-group--nojs');

    filterLink.addEventListener('click', function () {
      if (filter.classList.contains('selection-companion__filter-group--closed')) {
        filter.classList.remove('selection-companion__filter-group--closed');
        filter.classList.add('selection-companion__filter-group--opened');
      } else {
        filter.classList.add('selection-companion__filter-group--closed');
        filter.classList.remove('selection-companion__filter-group--opened');
      }
    });

    <script>
    var navCountry = document.querySelector('.country-nav');
    var linkCountry = document.querySelector('.country-filter__link');

    navCountry.classList.remove('country-nav--nojs');

    linkCountry.addEventListener('click', function () {
      if (navCountry.classList.contains('country-nav--closed')) {
        navCountry.classList.remove('country-nav--closed');
        navCountry.classList.add('country-nav--opened');
      } else {
        navCountry.classList.add('country-nav--closed');
        navCountry.classList.remove('country-nav--opened');
      }
    });

  </script>
