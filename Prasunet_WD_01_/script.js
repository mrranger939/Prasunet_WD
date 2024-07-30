const navbar = document.querySelector('.navbar');
const randomrgb = [Math.floor(Math.random() * 170),Math.floor(Math.random() * 91),Math.floor(Math.random() * 190)];
function calculateGradient(scrollPosition, s) {
    const normalizedScroll = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 255;
    console.log(normalizedScroll)
    const red = Math.round(normalizedScroll);
    const green = Math.round(200 - normalizedScroll);
    const blue = Math.round(180 - normalizedScroll);
    const for360 = 30 + (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 270;
    const gradient = `linear-gradient(${for360}deg, rgb(${red}, ${green} , ${s[2]}), rgb(${s[0]}, ${s[1]}, 180), rgb(${red}, ${s[1]}, ${s[2]}), rgb(${s[1]}, ${s[2]}, ${s[0]}), rgb(${red}, ${s[1]}, ${s[2]}))`;
    
    return gradient;
}

function changeNavbarGradient() {
    const gradient = calculateGradient(window.scrollY, randomrgb);
    navbar.style.backgroundImage = gradient;
}


window.addEventListener('load', () => {
    navbar.style.backgroundImage = calculateGradient(0, randomrgb); 
    
});


window.addEventListener('scroll', () => {
    changeNavbarGradient();
});
