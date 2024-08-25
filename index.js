document.getElementById('mobile-menu').addEventListener('click', function() {
    var menu = document.querySelector('.navbar-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
