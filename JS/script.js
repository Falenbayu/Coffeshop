//toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika menu di klik
document.querySelector('#hamburger-menu').onClick = () => {
    navbarNav.classList.toggle('active')
}