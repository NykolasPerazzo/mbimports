const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');
const icon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');

    if (menuList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
    } else {
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
    }
});
