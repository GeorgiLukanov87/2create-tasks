
document.addEventListener("DOMContentLoaded", randomImage);

function randomImage() {
    let usedIndices = JSON.parse(localStorage.getItem('usedIndices')) || [0, 1, 2, 3, 4];
    console.log(usedIndices)

    let images = [
        '../images/screen-0.png',
        '../images/screen-1.png',
        '../images/screen-2.png',
        '../images/screen-3.png',
        '../images/screen-4.png'
    ];

    let size = images.length;
    let index = Math.floor(size * Math.random());
    console.log(index);

    let element = document.getElementsByClassName('hero');
    console.log(element[0])

    let bgLg = "linear-gradient(0deg, rgba(36, 58, 90, 0.7), rgba(36, 58, 90, 0.7)), "

    if (usedIndices.includes(usedIndices.indexOf(index))) {
        element[0].style["background-image"] = `${bgLg}` + "url(" + images[usedIndices.pop(index)] + ")";
        if (usedIndices.length <= 1) {
            usedIndices = [0, 1, 2, 3, 4];
        }

    } else {
        element[0].style["background-image"] = `${bgLg}` + "url(" + images[usedIndices.pop(0)] + ")";
        usedIndices = [0, 1, 2, 3, 4];
    }

    localStorage.setItem('usedIndices', JSON.stringify(usedIndices));
}


