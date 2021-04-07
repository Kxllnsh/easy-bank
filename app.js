const menuList = document.querySelector('.nav-list');
const menuIcon = document.querySelector('.menu-bar');

menuIcon.addEventListener('click', ()=>{
    menuList.classList.toggle('show-menu');
});
