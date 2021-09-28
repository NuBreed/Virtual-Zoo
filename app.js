<<<<<<< HEAD
const navbar = document.querySelector('.nav-links');
const Btns = document.querySelectorAll('.fa');
const closeBtn = document.querySelector('.fa-times-circle-o');

Btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (navbar.classList.contains('show-link')) {
      navbar.classList.remove('show-links');
    } else {
      navbar.classList.add('show-links');
    }
  });
});
=======
const navbar = document.querySelector('.nav-links');
const Btns = document.querySelectorAll('.fa');
const closeBtn = document.querySelector('.fa-times-circle-o');

Btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (navbar.classList.contains('show-link')) {
      navbar.classList.remove('show-links');
    } else {
      navbar.classList.add('show-links');
    }
  });
});
>>>>>>> 80662435ee313c0a671dd55bb08db5f2cd4f2fd4
