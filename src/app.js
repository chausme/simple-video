const btn = document.querySelector('.js-switch');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

btn.addEventListener('change', e => {
    const label = e.target.nextElementSibling;
    if (e.target.checked) {
        label.innerText = 'Stop';
        video.play();
    } else {
        label.innerText = 'Start';
        video.pause();
    }
});

window.addEventListener('load', () => {
    preloader.classList.add('d-none');
});
