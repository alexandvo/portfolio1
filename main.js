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
window.addEventListener('scroll', () => {
    const cloud1 = document.getElementById('cloud-wrapper1');
    const cloud2 = document.getElementById('cloud-wrapper2');
    const cloud3 = document.getElementById('cloud-wrapper3');
    const cloud4 = document.getElementById('cloud-wrapper4');
    const cloud5 = document.getElementById('cloud-wrapper5');
    const cloud6 = document.getElementById('cloud-wrapper6');
    const yOffset = window.scrollY;
    cloud1.style.transform = `scale(0.8) translateY(-${yOffset * 0.43}px)`;
    cloud2.style.transform = `translateY(${yOffset * 0.2}px)`;
    cloud3.style.transform = `scaleY(0.6) translateY(-${yOffset * 0.6}px)`;

});
window.addEventListener('load', updateHomeButton);
window.addEventListener('scroll', updateHomeButton);

