// FLAG
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
// FLAG


//UP-ARROW
let upArrow = document.querySelector(".up-arrow");

upArrow.addEventListener("click",function(){
    window.scrollTo(0,0);
})
//UP-ARROW


