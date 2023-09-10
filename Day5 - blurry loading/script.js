const loadingtext = document.querySelector('.blurrPercentage');

const background = document.querySelector('.container')


let load = 0;
const loading = setInterval(update, 30);
function update() {
    load++;

    if (load > 99) {
        clearInterval(loading);
    }
    loadingtext.innerHTML = `${load}%`;
    loadingtext.style.opacity = 1 - (load / 100);
    background.style.filter = `blur(${scale(load, 0, 100, 20, 0)
        }px `;

}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}