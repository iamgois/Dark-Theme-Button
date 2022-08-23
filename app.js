var button = document.getElementById('button');
var bg = document.getElementById('background')

button.addEventListener('click', () => {
    bg.classList.toggle('right');
});
