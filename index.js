//navbar responsiveness
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu


const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);



// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const skillsMenu = document.querySelector("#skills-page");
    const projectMenu = document.querySelector("#projects-page");
    const contactMenu = document.querySelector("#contact-page");
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 500) {
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1200) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.add("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2000) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.add("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3800) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.add("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 4700) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 6300) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.remove("highlight");
        skillsMenu.classList.remove("highlight");
        projectMenu.classList.remove("highlight");
        contactMenu.classList.add("highlight");
        return;
    }


    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove("highlight");
    }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);




//TypeWriter Effect
// SELECT ELEMENTS FROM OUR DOM
document.addEventListener("DOMContentLoaded", init);
// INIT FUNCTION
function init() {
    // GRAP ALL ELEMENT & ATTRIBUTE
    const txtElement = document.querySelector(".type");
    // GET THE ATTRIBUTES OF TXT ELEMENT AND PARSE ITS DATA & REMEMBER JSON DATA SHOULD BE ON "" NOT ''
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // console.log(txtElement);
    // console.log(words);
    // console.log(wait);
    // INITILIZE TYPE WRITER & WE MAKE IT BY NEW
    new typeWriter(txtElement, words, wait);
}
// TYPE WRITER FUNCTION
const typeWriter = function (txtElement, words, wait = 3000) {
    // TEXT ELEMENT THAT PASSED IN
    this.txtElement = txtElement;
    // WORDS THAT PASSEF IN
    this.words = words;
    // WAIT TIME THAT PASSEF IN
    this.wait = parseInt(wait, 10);
    // TXT YOU WILL SEE AT RELOAD
    this.txt = "";
    // ARRAY OF WORDS
    this.indexOfTheWord = 0;
    // THE MAIN METHOD THAT WILL BE WORK WITH TYPE WRITER
    this.type();
    // REPRESENT THE STATE IF IT DELETING OR NOT
    this.isDeleteing = false;
};
// CREATE OUR TYPE METHOD
typeWriter.prototype.type = function () {
    // GET THE CURRNET INDEX OF THE WORD
    const currnet = this.indexOfTheWord % this.words.length;
    // console.log(currnet);
    // GET THE FULL TEXT OF A CURRNET WIRD
    const fullTxt = this.words[currnet];
    // console.log(fullTxt);
    // CHECK IF DELETING
    if (this.isDeleteing) {
        // REMOVE CHAR
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // ADD CHAR
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // INSERT TXT INTO TXTELEMENT
    this.txtElement.innerHTML = `<span class="txt"> ${this.txt} </span>`;
    // LETS MAKE THE TYPE SPEED
    let typeSpeed = 100;
    if (this.isDeleteing) {
        typeSpeed /= 2;
    }
    // CHECK IF THE WORD IS COMPELETE GO TO THE OTHER WORD
    if (!this.isDeleteing && this.txt === fullTxt) {
        // MAKE THE COMPELETE WORD PAUSE
        typeSpeed = this.wait;
        // SET ISDELETING VARIABLE TO TRUE
        this.isDeleteing = true;
        // console.log("Pasue");
    }
    if (this.isDeleteing && this.txt === "") {
        this.isDeleteing = false;
        // MOVE TO THE NEXT WORD
        this.indexOfTheWord++;
        // PAUSE BEFORE START TYPING
        typeSpeed = 400;
        // console.log("Delete");
    }
    setTimeout(() => this.type(), typeSpeed);
};


// Project img slider 1

let img1 = document.querySelector("#pro-img1");
let imgNum1 = 0;

let imgArr1 = [
  
    'https://cdn.modesens.com/static/img/20221231bg2_en.png',
    'https://cdn.modesens.com/static/img/20221231bg4_en.png'
]


setInterval(() => {
    if (imgNum1 === imgArr1.length - 1) {
        imgNum1 = 0;
    } else {
        imgNum1++;
    }
    img1.src = imgArr1[imgNum1];
}, 4000);


//Project img slider 2

// let img2 = document.querySelector("#pro-img2");
// let imgNum2 = 0;

// let imgArr2 = [

   
// ]


// setInterval(() => {
//     if (imgNum2 === imgArr2.length - 1) {
//         imgNum2 = 0;
//     } else {
//         imgNum2++;
//     }
//     img2.src = imgArr2[imgNum2];
// }, 4000);



// Project img slider 3

let img3 = document.querySelector("#pro-img3");
let imgNum3 = 0;

let imgArr3 = [
    "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0f2bf1145234233.Y3JvcCwzODM1LDMwMDAsNjM2LDA.png"
]


setInterval(() => {
    if (imgNum3 === imgArr3.length - 1) {
        imgNum3 = 0;
    } else {
        imgNum3++;
    }
    img3.src = imgArr3[imgNum3];
}, 4000);