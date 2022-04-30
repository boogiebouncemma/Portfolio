let imgLeftWoods = document.getElementById("img_left_woods")
let imgRightWoods = document.getElementById("img_right_woods")
let imgMountains = document.getElementById("img_mountains")
let imgRoad = document.getElementById("img_road")
let tPortfolio = document.getElementById("t_portfolio")

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    // imgLeftWoods.style.left = -value * 0.5 + 'px';
    // imgRightWoods.style.right = -value * 0.5 + 'px';

    imgMountains.style.transform = "scale("+ (1+ Math.pow(value,1/4)*0.1)  +")";
    tPortfolio.style.top = -value * 1.5 + 'px';
    console.log(value)
    console.log(1+ Math.pow(value,1/4)*0.1)

  })