document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("energyCounter");
    let target = parseInt(counter.getAttribute("data-target"));
    let count = 0;
    let speed = 50; // menor = más rápido

    let updateCounter = setInterval(() => {
        count += Math.ceil(target / 50);
        if (count >= target) {
            count = target;
            clearInterval(updateCounter);
        }
        counter.innerText = count.toLocaleString();
    }, speed);
});
