document.addEventListener('DOMContentLoaded', (event) => {
    const balloonsContainer = document.querySelector('.balloons');
    
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloonsContainer.appendChild(balloon);
    }
});