// Function to toggle the menu visibility
function toggleMenu() {
    let mobileNav = document.getElementById('mobileNav');
    let body = document.body;

    if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
        body.classList.remove('no-scroll');
    } else {
        mobileNav.style.display = 'flex';
        body.classList.add('no-scroll');
    }
    console.log('Menu toggled:', mobileNav.style.display);
    console.log('Body overflow:', body.style.overflow);
}