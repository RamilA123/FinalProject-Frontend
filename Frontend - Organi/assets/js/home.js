// FLAG
let flagHeader = document.querySelector(".flag-header");

let flags = document.querySelectorAll(".flag-item");

flagHeader.addEventListener("click", function () {
    if (this.nextElementSibling.classList.contains("invisible")) {

        this.nextElementSibling.classList.remove("invisible");
        this.nextElementSibling.style.cssText = `
        height: 78px;
        `
    }
    else {
        this.nextElementSibling.classList.add("invisible");
        this.nextElementSibling.style.cssText = `
        height: 0;
        `
    }
})

for (const flag of flags) {

    flag.addEventListener("click", function () {

        let flagText = this.closest(".flags").firstElementChild.firstElementChild.firstElementChild.innerText

        let flagImage = this.closest(".flags").firstElementChild.firstElementChild.children[1].firstElementChild.getAttribute("src");

        this.closest(".flags").firstElementChild.firstElementChild.firstElementChild.innerText = this.firstElementChild.innerText;

        this.closest(".flags").firstElementChild.firstElementChild.children[1].firstElementChild.setAttribute("src", this.lastElementChild.firstElementChild.getAttribute("src"));

        this.firstElementChild.innerText = flagText;

        this.lastElementChild.firstElementChild.setAttribute("src", flagImage);

        if (!this.parentNode.classList.contains("invisible")) {

            this.parentNode.classList.add("invisible");
            this.parentNode.style.cssText = `
            height: 0;
            `
        }
    })
}
// FLAG

//UP-ARROW
let upArrow = document.querySelector(".up-arrow");

upArrow.addEventListener("click", function () {
    window.scrollTo(0,0);
})
//UP-ARROW


//DROPDOWN-MENU-START
let dropdownTitles = document.querySelectorAll(".drop-down-title")
let dropdownMenues = document.querySelectorAll(".drop-down-menu")

for (const dropdown of dropdownTitles) {
    dropdown.addEventListener("mouseover",function(){
        this.firstElementChild.children[0].style.color = "green";
        this.firstElementChild.children[1].style.width = "100%";
        this.firstElementChild.children[2].style.color = "green";
    })

    dropdown.addEventListener("mouseout",function(){
        this.firstElementChild.children[0].style.color = "";
        this.firstElementChild.children[1].style.width = "0%";
        this.firstElementChild.children[2].style.color = "";
    })
}

for (const dropdown of dropdownMenues) {
    dropdown.addEventListener("mouseover",function(){
        this.previousElementSibling.firstElementChild.children[0].style.color = "green";
        this.previousElementSibling.firstElementChild.children[1].style.width = "100%";
        this.previousElementSibling.firstElementChild.children[2].style.color = "green";
    })

    dropdown.addEventListener("mouseout",function(){
        this.previousElementSibling.firstElementChild.children[0].style.color = "";
        this.previousElementSibling.firstElementChild.children[1].style.width = "0%";
        this.previousElementSibling.firstElementChild.children[2].style.color = "";
    })
}

//DROPDOWN-MENU-END



// OWL-CAROUSEL
$(document).ready(function () {

    $('.loop').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 4
            }
        }
    });

    $('.nonloop').owlCarousel({
        center: true,
        items: 2,
        loop: false,
        margin: 10,
        responsive: {
            600: {
                items: 4
            }
        }
    });

});
// OWL-CAROUSEL




//COUNTDOWN
const targetDate = new Date("2023-09-03 23:59:59").getTime();

const countdownInterval = setInterval(function () {

    const currentDate = new Date().getTime();

    const remainingTime = targetDate - currentDate;

    const numberOfDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const numberOfHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const numberOfMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const numberOfSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = numberOfDays;
    document.getElementById("hours").innerText = numberOfHours;
    document.getElementById("minutes").innerText = numberOfMinutes;
    document.getElementById("seconds").innerText = numberOfSeconds;

}, 1000);
//COUNTDOWN
