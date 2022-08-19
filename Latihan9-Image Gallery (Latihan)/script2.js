const img = document.querySelectorAll(".item");
const heroImg = document.querySelector(".hero img");
const textImg = document.querySelector(".textJudul h1");

img.forEach(function(x, i){
    x.addEventListener("mouseenter", function(y){
        y.target.style.opacity = "0.5";
        x.addEventListener("click", function(){
            heroImg.setAttribute("src", y.target.src);
            textImg.innerHTML = ("Image " + (i + 1));
        });
        x.addEventListener("mouseleave", function(){
            y.target.style.opacity = "1";
        });
    }); 
});

// img.forEach(function(x){
//     x.addEventListener("mouseleave", function(y){
//         y.target.style.opacity = "1";
//     });
// });