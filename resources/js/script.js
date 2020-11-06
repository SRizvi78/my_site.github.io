let navBa, navLogos, navBars, NavClose, NavCloseBar;
navBa = document.getElementsByClassName('nav-to');
navLogos = document.getElementsByClassName('nav-bar');

navBars = navBa[0].className;

function navOpen() {
    if (navBars === 'nav-to') {
        navBa[0].className = 'nav-to open';
    }
};
function navClose() {
    NavClose = navBa[0].className;
    if (NavClose === 'nav-to open') {
        navBa[0].className = 'nav-to';
    }
}

navLogos[0].onclick = navOpen;
navLogos[1].onclick = navClose;


   