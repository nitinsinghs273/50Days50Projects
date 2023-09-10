const button = document.querySelector('.btn');
const search = document.querySelector('#Hidden');
const container = document.querySelector('.container');


button.addEventListener('click', () => {
    container.classList.toggle('active');
    search.focus();
})