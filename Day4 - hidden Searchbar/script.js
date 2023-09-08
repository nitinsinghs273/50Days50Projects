let button = document.getElementsByClassName("btn")[0];
let search = document.getElementById('Hidden')

let count = 0;
button.addEventListener('click', () => {
    if (count % 2 == 0) {
        search.style.display = 'none';
        count++;
    }
    else {
        search.style.display = 'block';
        count++;
    }

})