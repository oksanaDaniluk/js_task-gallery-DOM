'use strict';

const thumbs = document.querySelectorAll('.gallery__thumb');
const largeImg = document.querySelector('#largeImg');
let current = 0;
const count = thumbs.length;

thumbs.forEach(function(thumb, n) {
  thumb.addEventListener('click', function() {
    event.preventDefault();
    showPhoto(n);
  });
});

function showPhoto(index) {
  const src = thumbs[index].closest('a').getAttribute('href');

  largeImg.setAttribute('src', src);
  current = index;
}

largeImg.addEventListener('click', function() {
  showPhoto((current + 1) % count);
});
