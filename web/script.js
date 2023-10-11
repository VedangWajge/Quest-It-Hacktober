function toggleNavbar() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display === 'none' || navLinks.style.display === ''
        ? navLinks.style.display = 'flex'
        : navLinks.style.display = 'none';
}
