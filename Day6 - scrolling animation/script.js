const boxes = document.querySelectorAll('.box1');
const container = document.querySelector('.container');


window.addEventListener('scroll', scrolling);

function scrolling() {
    let triggerHeight = window.innerHeight * (4 / 5);
    boxes.forEach(box => {
        const boxtop = box.getBoundingClientRect().top;
        if (boxtop < triggerHeight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }

    });
}