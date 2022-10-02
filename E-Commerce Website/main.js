const navIconEl = document.querySelector(".nav__icon"),
navCloseEl = document.querySelector(".nav__close"),
navList = document.querySelector(".menu"),
navBgOverlayEl = document.querySelector(".nav__bgOverlay");

const navOpen = () => {
    navList.classList.add("show");
    navBgOverlayEl.classList.add("active");
    document.body.style = "visibility: visible; height: 100vh; width: 100vw; overflow: hidden;";
}

const navClose = () => {
    navList.classList.remove("show");
    navBgOverlayEl.classList.remove("active");
    document.body.style = "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
}

navIconEl.addEventListener("click", navOpen);
navCloseEl.addEventListener("click", navClose);
navBgOverlayEl.addEventListener("click", navClose);

// CHANGE NAVBAR STYLES ON SCROLL
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
    document.querySelector('nav .form').classList.toggle('form-group', window.scrollY > 20);
});

// SEARCH BUTTON
document.querySelector(".form .search__btn").addEventListener("click", () => {
    let searchInput = document.querySelector(".form .search").value;
    let elements = document.querySelectorAll(".item__description");
    let cards = document.querySelectorAll(".store__item");

    elements.forEach((element, index) => {
        if(element.innerText.includes(searchInput)){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    });
});

// PRODUCT FILTER
// function filterProduct(value){
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach(button => {
//         if(value.toUpperCase() == button.innerText.toUpperCase()){
//             button.classList.add("active");
//         }
//         else{
//             button.classList.remove("active");
//         }
//     });

//     let elements = document.querySelectorAll(".store__item");
//     elements.forEach((element) => {
//         if(value == "Bütün məhsullar"){
//             element.classList.remove("hide");
//         }
//         else{
//             if(element.classList.contains(value)){
//                 element.classList.remove("hide");
//             }
//             else{
//                 element.classList.add("hide");
//             }
//         }
//     });
// }

// window.onload = () => {
//     filterProduct("Bütün məhsullar");
// }

function filterButton(value){
    let filterButtonBodys = document.querySelectorAll(".filter__button__body");
    let filterButtonHeadIs = document.querySelectorAll(".filter__button__head i");
    filterButtonHeadIs.forEach((filterButtonHeadI) => {
        if(filterButtonHeadI.classList.contains(value)){
            filterButtonHeadI.classList.toggle("uil-angle-up");
        }
    });

    filterButtonBodys.forEach((filterButtonBody) => {
        if(filterButtonBody.classList.contains(value)){
            filterButtonBody.classList.toggle("active");
        }else{
            filterButtonBody.classList.remove("active");
        }
    });
}

function filterButtonItem(value){
    let elements = document.querySelectorAll(".store__item");
    let filterButtonBodys = document.querySelectorAll(".filter__button__body");

    filterButtonBodys.forEach((filterButtonBody) => {
        filterButtonBody.classList.remove("active");
    });
    
    elements.forEach((element) => {
        if(element.classList.contains(value)){
            element.classList.add("show");
        }else{
            element.classList.remove("show");
        }
    });
}

// window.onload = () => {
//     filterButtonItem()
// }