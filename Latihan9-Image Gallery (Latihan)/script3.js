const heroImg = document.querySelector(".hero img");
const itemImg = document.querySelectorAll(".item");
const textImg = document.querySelector(".textJudul h1");


itemImg.forEach(function(x, i){
    x.addEventListener("mouseenter", function(y){
        y.target.style.opacity = 0.5;
        x.addEventListener("mouseleave", function(y){
            y.target.style.opacity = 1;
        });
        x.addEventListener("click", function(y){
            heroImg.setAttribute("src", y.target.src);
            textImg.innerHTML = "Image " + (i+1);
        });
    });
});

