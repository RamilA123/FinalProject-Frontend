// HEADER-STAR

let flags = document.querySelectorAll(".flag");

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

// MAIN-END
