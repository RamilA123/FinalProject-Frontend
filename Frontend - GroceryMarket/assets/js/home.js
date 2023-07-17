// HEADER-STAR

let flags = document.querySelectorAll(".country-flag");

for (const flag of flags) {

    flag.addEventListener("click",function(){

    let flagText =  this.closest(".flags").firstElementChild.firstElementChild.firstElementChild.innerText

    let flagImage = this.closest(".flags").firstElementChild.firstElementChild.children[1].firstElementChild.getAttribute("src");

    this.closest(".flags").firstElementChild.firstElementChild.firstElementChild.innerText = this.firstElementChild.innerText;

    this.closest(".flags").firstElementChild.firstElementChild.children[1].firstElementChild.setAttribute("src",this.lastElementChild.firstElementChild.getAttribute("src"));

    this.firstElementChild.innerText = flagText;

    this.lastElementChild.firstElementChild.setAttribute("src",flagImage);

    })
}
// HEADER-END



// MAIN-START

$(document).ready(function(){

    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });
    
    $('.nonloop').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });
    
  });

const targetDate = new Date("2023-09-17 23:59:59").getTime();

const countdownInterval = setInterval(function() {

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

// MAIN-END
