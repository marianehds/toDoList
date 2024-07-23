const starField = document.body;
const starCount = 150;
for (let i = 0; i < starCount; i++) {
    let star = document.createElement('div');
    star.className = 'estrela';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 2}s`;
    starField.appendChild(star);
}
