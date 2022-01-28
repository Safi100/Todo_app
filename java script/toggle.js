const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");
toggle.addEventListener("click", switch_theme);

function switch_theme(){
    html.classList.toggle('dark');
    html.classList.toggle('light');
}
const listcontainer = document.querySelector('.list-container');

