// DOM variables
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

// Event listeners to the play/pause button
btn.addEventListener('click', function() {
  if(btn.classList.contains('slide')) {
    btn.classList.remove('slide');
    video.play()
  } else {
    btn.classList.add('slide');
    video.pause();
  }
});

// window loading event
window.addEventListener('load', function() {
  preloader.classList.add('hide-preloader');
})