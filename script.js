const backgroundContainer = document.querySelector('.background');

function resizeBackground() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    backgroundContainer.style.width = `${width}px`;
    backgroundContainer.style.height = `${height}px`;
}

window.addEventListener('resize', resizeBackground);
resizeBackground();
