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


//PRODUCT-DETAIL
let detailImages = document.querySelectorAll(".detail-images img");
detailImages.forEach(image => {
    image.addEventListener("click", function () {
        let mainImage = this.closest(".left-side").firstElementChild.firstElementChild.getAttribute("src");
        this.closest(".left-side").firstElementChild.firstElementChild.setAttribute("src", this.getAttribute("src"));
        this.setAttribute("src", mainImage);
    })
});
//PRODUCT-DETAIL


//UP-ARROW
let upArrow = document.querySelector(".up-arrow");

upArrow.addEventListener("click", function () {
    window.scrollTo(0, 0);
})
//UP-ARROW



//REVIEW-RATING-START
let ratingCount = 0

$(document).ready(function(){

    $(document).on("click", "#review .user-rating svg",function(){
     
        if(!$(this).hasClass("active")){
         $(this).addClass("active")
         ratingCount++;

        }

        else{
         $(this).removeClass("active")
         ratingCount--;
        }

        console.log(ratingCount)
    })
 })
//REVIEW-RATING-END



