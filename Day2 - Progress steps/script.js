const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var currActive = 1;
next.addEventListener('click', () => {
    currActive += 1;
    if (currActive > circles.length) {
        currActive = circles.length;
    }
    update();

})

prev.addEventListener('click', () => {
    currActive -= 1;
    if (currActive < 1) {
        currActive = 1;
    }
    update();

})

function update() {
    //change the circle part as active
    let source = Array.from(circles);
    source.forEach(logic);
    function logic(circle, index) {
        if (index < currActive) {
            circle.classList.add("active");
        }
        else {
            circle.classList.remove('active');
        }
    }
    //change the progress line too
    progress.style.width = ((currActive - 1) / 3) * 100 + "%";

    //the making button active and disabled
    if (currActive === circles.length) {
        next.disabled = true;
        prev.disabled = false;
    }
    else if (currActive === 1) {
        next.disabled = false;
        prev.disabled = true;
    }
    else {
        next.disabled = false;
        prev.disabled = false;
    }

}