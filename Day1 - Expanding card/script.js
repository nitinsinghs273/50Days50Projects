const images = document.querySelectorAll(".images");

images.forEach((images) => {
    images.addEventListener('click', () => {
        removeAcitveImage();
        images.classList.add("active-link")


    })
})

function removeAcitveImage() {
    images.forEach((images) => {
        images.classList.remove('active-link');
    })
}