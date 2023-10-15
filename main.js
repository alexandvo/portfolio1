function updateHomeButton() {
    const homeButton = document.getElementById('home-button');
    const innerCircle = document.getElementById('inner');
    const yOffset = window.scrollY;
    if (yOffset == 0) {
        homeButton.style.pointerEvents = 'none';
        innerCircle.style.background = '#5f5f5f';
    } else {
        homeButton.style.pointerEvents = 'auto';
        innerCircle.style.background = '#9e0000';
    }
}

window.addEventListener('load', updateHomeButton);
window.addEventListener('scroll', updateHomeButton);

