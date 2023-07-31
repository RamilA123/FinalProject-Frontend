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


//REVIEW-START
let ratingCount = 0

$(document).ready(function () {

    $(document).on("click", "#add-review .rating-icon svg", function () {

        if (!$(this).hasClass("active")) {
            $(this).addClass("active")
            ratingCount++;
        }

        else {
            $(this).removeClass("active")
            ratingCount--;
        }

    })
})
//REVIEW-END


//ADD-REVIEW-START
let btn = document.querySelector("#add-review .submit");
let parent = document.querySelector("#review .parent");
let textArea = document.querySelector("#add-review textarea");
let nameInput = document.querySelector("#add-review .name")
let emailInput = document.querySelector("#add-review .email")
let ratingChildrenCount = document.querySelector("#review .user-rating").children.length
let datas = []


if (JSON.parse(localStorage.getItem("review")) != null) {
    datas = JSON.parse(localStorage.getItem("review"))

    datas.forEach(data => {

        let userRating = document.createElement("div");
        userRating.className = "user-rating";

        for (let i = 1; i <= ratingChildrenCount; i++) {

            userRating.innerHTML += `<i class="fa-solid fa-star ${i <= data.ratingCount ? "active" : ""}"></i>`
        }
        let content = document.createElement("div");
        content.className = "review-content";

        content.innerHTML += `
            <div class="review-user-image">
            <img src="assets/images/reviews/user2.jpg" alt="">
             </div>
    
             <div class="review-user-description">
    
    
            <div class="user-fullname-rating">
    
                <div class="user-fullname">
                    <span>${data.fullName}</span>
                </div>
    
                <div class="user-rating">
                 <i class="fa-solid fa-star active" id="1"></i>
                 <i class="fa-solid fa-star active" id="2"></i>
                 <i class="fa-solid fa-star active" id="3"></i>
                 <i class="fa-solid fa-star" id="4"></i>
                 <i class="fa-solid fa-star" id="5"></i>
                </div>
    
            </div>
    
            <div class="user-description">
                <p>${data.description}
                </p>
                <span>${data.email}</span>
            </div>
    
        </div>
            `
        parent.append(content);

        let child = parent.lastElementChild;
        console.log(child)
        child.lastElementChild.firstElementChild.lastElementChild.remove()
        child.lastElementChild.firstElementChild.append(userRating)
    });
}


btn.addEventListener("click", function (e) {
    e.preventDefault();

   

    let userRating = document.createElement("div");
    userRating.className = "user-rating";

    for (let i = 1; i <= ratingChildrenCount; i++) {

        userRating.innerHTML += `<i class="fa-solid fa-star ${i <= ratingCount ? "active" : ""}"></i>`
    }

    if (textArea.value == "" || nameInput.value == "" || emailInput.value == "") {
        document.querySelector("#add-review .alert").classList.remove("d-none");
    }
    else {

        let data = {
            description: textArea.value,
            fullName: nameInput.value,
            email: emailInput.value,
            ratingCount: ratingCount
        }
    
        datas.push(data)
    
        localStorage.setItem("review", JSON.stringify(datas))

        let content = document.createElement("div");
        content.className = "review-content";

        content.innerHTML += `
        <div class="review-user-image">
        <img src="assets/images/reviews/user2.jpg" alt="">
         </div>

         <div class="review-user-description">


        <div class="user-fullname-rating">

            <div class="user-fullname">
                <span>${nameInput.value}</span>
            </div>

            <div class="user-rating">
             <i class="fa-solid fa-star active" id="1"></i>
             <i class="fa-solid fa-star active" id="2"></i>
             <i class="fa-solid fa-star active" id="3"></i>
             <i class="fa-solid fa-star" id="4"></i>
             <i class="fa-solid fa-star" id="5"></i>
            </div>

        </div>

        <div class="user-description">
            <p>${textArea.value}
            </p>
            <span>${emailInput.value}</span>
        </div>

    </div>
        `
        parent.append(content);

        let child = parent.lastElementChild;
        console.log(child)
        child.lastElementChild.firstElementChild.lastElementChild.remove()
        child.lastElementChild.firstElementChild.append(userRating)

        textArea.value = "";
        nameInput.value = "";
        emailInput.value = "";
    }
})

//ADD-REVIEW-END

