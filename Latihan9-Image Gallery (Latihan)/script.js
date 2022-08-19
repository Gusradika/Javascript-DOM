const img = document.querySelectorAll(".item");
const heroImg = document.querySelector(".hero img");
const imgText = document.querySelector(".textJudul h1");

img.forEach(function (e, i){
    e.addEventListener("mouseenter",function(x){
        x.target.style.opacity = 0.5;
        x.target.style.cursor = "pointer";
        e.addEventListener("click",function(){
        heroImg.setAttribute("src", x.target.src);
        imgText.innerHTML = "Image " + (i+1);
        })
    });
});

img.forEach(function (e){
    e.addEventListener("mouseleave",function(x){
        x.target.style.opacity = 1;
    });
});

