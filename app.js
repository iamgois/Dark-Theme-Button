var bg = document.getElementById('background')
var body = document.getElementById('section')
var btn = document.getElementById('button')

function active(){
    bg.classList.toggle('right');
    body.classList.toggle('black');
    btn.classList.toggle('border-white')
}