const header = document.querySelector('.header');
const footer = document.querySelector('.footer');


function choiceDark() {
    console.log("Dark");
    header.style.background = "black";
    header.style.transition = "1s ease-out 0.5s"
    footer.style.background = "black";
}


function choiceLight() {
    console.log("Light");
    header.style.background = "#00dc43";
    header.style.transition = "1s ease-out 0.5s"
    footer.style.background = "#00dc43";
}
