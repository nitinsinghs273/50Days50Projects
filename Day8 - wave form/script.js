const input = document.querySelector('.email');
const container1 = document.querySelector('.input');


input.addEventListener('focus', () => {
    container1.classList.add('show');

})
input.addEventListener('input', () => {
    const val = document.querySelector('#MyInput').value;
    if (val.length == 0) {
        container1.classList.remove('show');
    }
})