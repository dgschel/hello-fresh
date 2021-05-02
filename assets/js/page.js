const sidenav = document.getElementById('sidenav');
const overlay = document.getElementById('overlay');
const headline = document.getElementById('headline');
const app_button_text = document.getElementById('get-the-app');

if (matchMedia) {
    const ms = matchMedia("(min-width: 768px)");
    ms.addEventListener("change", breakpointState);
    breakpointState(ms)
}

overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.body.style.overflow = "auto";
    sidenav.classList.toggle('open');
});

function toggleSidenav() {
    document.body.style.overflow = "hidden";
    overlay.style.display = 'block';
    sidenav.classList.toggle('open');
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        var typewriter = new Typewriter(headline, {
            strings: ['Zeit', 'Geld', 'Stress'],
            autoStart: true,
            loop: true,
            delay: 30,
            cursor: ''
        });
    }
};

function breakpointState(ms) {
    if (ms.matches) {
        app_button_text.innerText = "Installiere unsere App";
    }
    else {
        app_button_text.innerText = "App herunterladen";
    }
}