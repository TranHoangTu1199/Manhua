//import { test } from "../chaplist.js";

const autoWidth = 1000;
const myChap = 1;
//let myChaps;
window.alert(1);


const myChaps = {
    n: 4,
    chap: [
        "Chap 0: ABYSSAL NGỦ SAY",
        "Chap 1: ÁC MỘNG GIÁNG THẾ",
        "Chap 2: THIẾU NỮ TỪ TRONG ABYSSAL"
    ]
}

const classList = document.getElementsByClassName("list")[0];
for (let i = 0; i < myChaps.chap.length; i++) {
    const chapter = document.createElement("li");
    chapter.innerHTML = `<a href=""${myChap === i ? " style=\"color: blue;\"" : ""}> ${myChaps.chap[i]} </a>`;
    classList.appendChild(chapter);
}

function removeTag(tagName) {
    let myTag = document.getElementsByTagName(tagName);
    while (myTag.length > 0) {
        myTag[0].parentNode.removeChild(myTag[0]);
    }
}

let Images = [];
let maxWidth = document.documentElement.clientWidth;

const setHeader = document.getElementsByClassName("header")[0].style;
setHeader.left = (maxWidth >= autoWidth) ? `${(maxWidth - autoWidth) / 2}px` : 0;
setHeader.rigth = (maxWidth >= autoWidth) ? `${(maxWidth - autoWidth) / 2}px` : 0;
setHeader.width = (maxWidth >= autoWidth) ? `${autoWidth}px` : "100%";

for (let i = 1; i < 47; i++) {
        
    const newImg = document.createElement("img");
    Images[i - 1] = newImg 
    const imgName = `000${i}.jpg`;
    newImg.setAttribute('style', (maxWidth >= autoWidth) ? `width: ${autoWidth}px; margin-left: ${(maxWidth - autoWidth) / 2}px;` : "width: 100%;");
    newImg.setAttribute('src', imgName.substr(imgName.length - 8, imgName.length));
    document.body.appendChild(newImg);

}

function listOnclick() {
    if (classList.style.opacity == "1") {
        classList.style.left = "-150vw";
        classList.style.opacity = "0";
    } else {
        classList.style.left = "-200%";
        classList.style.opacity = "1";
    }
}

function reLoad () {
    let maxWidth = document.documentElement.clientWidth;
    for (let i = 0; i < Images.length; i++) {
        Images[i].setAttribute('style', (maxWidth >= autoWidth) ? `width: ${autoWidth}px; margin-left: ${(maxWidth - autoWidth) / 2}px;` : "width: 100%;");
    }
    setHeader.left = (maxWidth >= autoWidth) ? `${(maxWidth - autoWidth) / 2}px` : 0;
    setHeader.right = (maxWidth >= autoWidth) ? `${(maxWidth - autoWidth) / 2}px` : 0;
    setHeader.width = (maxWidth >= autoWidth) ? `${autoWidth}px` : "100%";
    setHeader.transition = "0s";
}

let pageY = window.scrollY

function mouseMove (m) {
    if (pageY > window.scrollY) {
        setHeader.top = 0;
        setHeader.transition = "0.3s";
    } else {
        setHeader.top = "-60px";
        setHeader.transition = "0.3s";
        classList.style.left = "-150vw";
        classList.style.opacity = "0";
    }

    pageY = window.scrollY
}

window.addEventListener('resize', reLoad);
window.addEventListener('scroll', mouseMove);
