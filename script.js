// Function to toggle the menu visibility
function toggleMenu() {
    let nav = document.querySelector('.navigation');
    let body = document.body;

    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        body.style.overflow = 'hidden'; // Disable scrolling
    } else {
        body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

// // Detect scroll and add the 'scrolled' class to the menu button when user scrolls
// window.onscroll = function() {
//     let menuButton = document.getElementById('menuButton');
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         menuButton.classList.add('scrolled');
//     } else {
//         menuButton.classList.remove('scrolled');
//     }
// };