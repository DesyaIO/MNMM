document.addEventListener('mousemove',e => {
    Object.assign(document.documentElement, {
        style: `
        --rotate-x: ${(e.clientX - window.innerWidth/2) * -0.005}deg;
        --rotate-y: ${(e.clientY - window.innerHeight/2) * 0.002}deg;
        `
    })
})
let procent = 0;
document.addEventListener("scroll", e => {
    procent = window.scrollY/(document.documentElement.scrollHeight - document.documentElement.clientHeight);
    procent *= 100;
    document.getElementById("scroll-bar").style.height = procent + "%";
})

console.log();