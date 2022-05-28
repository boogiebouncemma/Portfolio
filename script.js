let imgLeftWoods = document.getElementById("img_left_woods")
let imgRightWoods = document.getElementById("img_right_woods")
let imgMountains = document.getElementById("img_mountains")
let imgRoad = document.getElementById("img_road")
let tPortfolio = document.getElementById("t_portfolio")
let bScrollDown = document.getElementById("scroll_down")

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    // imgLeftWoods.style.left = -value * 0.5 + 'px';
    // imgRightWoods.style.right = -value * 0.5 + 'px';

    // imgMountains.style.transform = "scale("+ (1+ Math.pow(value,1/4)*0.1)  +")";
    imgMountains.style.transform = "scale("+ (1+ value*0.003)  +")";
    imgMountains.style.bottom = value * 0.2 + 'px';
    imgRoad.style.transform = "scale("+ (1+ value*0.002)  +")";
    imgRoad.style.bottom = value * 0.1 + 'px';
    imgLeftWoods.style.transform = "scale("+ (1+ value*0.002)  +")";
    imgLeftWoods.style.bottom = value * 0.1 + 'px';
    imgRightWoods.style.transform = "scale("+ (1+ value*0.002)  +")";
    imgRightWoods.style.bottom = value *0.1 + 'px';
    tPortfolio.style.top = -value * 1.5 + 'px';

  })

bScrollDown.addEventListener("click", function () {
    window.scrollTo(0,180);
})

/* navbar */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {navbarFunction()};

// Get the navbar
var navbar = document.getElementById("header_text");
var tScrollDown = document.getElementById("scroll_down");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    tPortfolio.style.paddingTop = "158px";
    //tScrollDown.classList.add("sticky-impact2")
  } else {
    navbar.classList.remove("sticky");
    tPortfolio.style.paddingTop = "79px";
    //tScrollDown.classList.remove("sticky-impact2")
  }
}