

var elMenuBtn = document.querySelector(".burger-menu");
var elHiddenHeader = document.querySelector(".hidden-header");
var elMenuImg = document.querySelector(".burger-menu-img");

var icon = true;

elMenuBtn.addEventListener("click", function(){
    elHiddenHeader.classList.toggle("show-header");

    if(!icon){
        elMenuImg.src = "../images/burger-menu.svg";
        icon = true;
    } else {
        elMenuImg.src = "../images/burger-menu-close.svg";
        icon = false;
    }
})